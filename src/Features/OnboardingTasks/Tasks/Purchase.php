<?php

namespace Automattic\WooCommerce\Admin\Features\OnboardingTasks\Tasks;

use Automattic\WooCommerce\Admin\Internal\Onboarding\OnboardingProducts;
use Automattic\WooCommerce\Admin\Features\OnboardingTasks\Task;

/**
 * Purchase Task
 */
class Purchase extends Task {
	/**
	 * Initialize.
	 */
	public function __construct() {
		add_action( 'update_option_woocommerce_onboarding_profile', array( $this, 'clear_dismissal' ), 10, 2 );
	}

	/**
	 * Clear dismissal on onboarding product type changes.
	 *
	 * @param array $old_value Old value.
	 * @param array $new_value New value.
	 */
	public function clear_dismissal( $old_value, $new_value ) {
		$product_types          = isset( $new_value['product_types'] ) ? (array) $new_value['product_types'] : array();
		$previous_product_types = isset( $old_value['product_types'] ) ? (array) $old_value['product_types'] : array();

		if ( empty( array_diff( $product_types, $previous_product_types ) ) ) {
			return;
		}

		$this->undo_dismiss();
	}

	/**
	 * Get the task arguments.
	 * ID.
	 *
	 * @return string
	 */
	public function get_id() {
		return 'purchase';
	}

	/**
	 * Parent ID.
	 *
	 * @return string
	 */
	public function get_parent_id() {
		return 'setup';
	}

	/**
	 * Title.
	 *
	 * @return string
	 */
	public function get_title() {
		$products = self::get_products();

		return count( $products['remaining'] ) === 1
			? sprintf(
				/* translators: %1$s: list of product names comma separated, %2%s the last product name */
				__(
					'Add %s to my store',
					'woocommerce-admin'
				),
				$products['remaining'][0]
			)
			: __(
				'Add paid extensions to my store',
				'woocommerce-admin'
			);
	}

	/**
	 * Content.
	 *
	 * @return string
	 */
	public function get_content() {
		$products = self::get_products();

		return count( $products['remaining'] ) === 1
			? $products['purchaseable'][0]['description']
			: sprintf(
				/* translators: %1$s: list of product names comma separated, %2%s the last product name */
				__(
					'Good choice! You chose to add %1$s and %2$s to your store.',
					'woocommerce-admin'
				),
				implode( ', ', array_slice( $products['remaining'], 0, -1 ) ) . ( count( $products['remaining'] ) > 2 ? ',' : '' ),
				end( $products['remaining'] )
			);
	}

	/**
	 * Action label.
	 *
	 * @return string
	 */
	public function get_action_label() {
		return __( 'Purchase & install now', 'woocommerce-admin' );
	}


	/**
	 * Time.
	 *
	 * @return string
	 */
	public function get_time() {
		return __( '2 minutes', 'woocommerce-admin' );
	}

	/**
	 * Task completion.
	 *
	 * @return bool
	 */
	public function is_complete() {
		$products = self::get_products();
		return count( $products['remaining'] ) === 0;
	}

	/**
	 * Dismissable.
	 *
	 * @return bool
	 */
	public function is_dismissable() {
		return true;
	}

	/**
	 * Task visibility.
	 *
	 * @return bool
	 */
	public function can_view() {
		$products = self::get_products();
		return count( $products['purchaseable'] ) > 0;
	}

	/**
	 * Get purchaseable and remaining products.
	 *
	 * @return array
	 */
	public static function get_products() {
		return OnboardingProducts::get_relevant_products();
	}
}
