<?php
/**
 * WooCommerce Onboarding Mailchimp
 * NOTE: DO NOT edit this file in WooCommerce core, this is generated from woocommerce-admin.
 */

namespace Automattic\WooCommerce\Admin\Features\Onboarding;

use Automattic\WooCommerce\Admin\Schedulers\MailchimpScheduler;

/**
 * Logic around updating Mailchimp during onboarding.
 */
class OnboardingMailchimp {
	/**
	 * Init.
	 */
	private function init() {
		add_action( 'woocommerce_onboarding_profile_data_updated', array( $this, 'on_profile_data_updated' ), 10, 2 );
	}

	/**
	 * Delete MailchimpScheduler::SUBSCRIBED_OPTION_NAME option if profile data is being updated with a new email.
	 *
	 * @param array $existing_data Existing option data.
	 * @param array $updating_data Updating option data.
	 */
	public function on_profile_data_updated( $existing_data, $updating_data ) {
		if (
			isset( $existing_data['store_email'] ) &&
			isset( $updating_data['store_email'] ) &&
			$existing_data['store_email'] !== $updating_data['store_email']
		) {
			delete_option( MailchimpScheduler::SUBSCRIBED_OPTION_NAME );
		}
	}
}
