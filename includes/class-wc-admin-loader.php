<?php
/**
 * Register the scripts, styles, and includes needed for pieces of the WooCommerce Admin experience.
 * NOTE: DO NOT edit this file in WooCommerce core, this is generated from woocommerce-admin.
 *
 * @package Woocommerce Admin
 */

/**
 * WC_Admin_Loader Class.
 */
class WC_Admin_Loader {
	/**
	 * App entry point.
	 */
	const APP_ENTRY_POINT = 'wc-admin';

	/**
	 * Class instance.
	 *
	 * @var WC_Admin_Loader instance
	 */
	protected static $instance = null;

	/**
	 * An array of classes to load from the includes folder.
	 *
	 * @var array
	 */
	protected static $classes = array();

	/**
	 * Get class instance.
	 */
	public static function get_instance() {
		if ( ! self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor.
	 * Hooks added here should be removed in `wc_admin_initialize` via the feature plugin.
	 */
	public function __construct() {
		add_action( 'init', array( 'WC_Admin_Loader', 'load_features' ) );
		add_action( 'admin_enqueue_scripts', array( 'WC_Admin_Loader', 'register_scripts' ) );
		add_action( 'admin_enqueue_scripts', array( 'WC_Admin_Loader', 'load_scripts' ), 15 );
		add_action( 'woocommerce_components_settings', array( 'WC_Admin_Loader', 'add_component_settings' ) );
		add_filter( 'admin_body_class', array( 'WC_Admin_Loader', 'add_admin_body_classes' ) );
		add_action( 'admin_menu', array( 'WC_Admin_Loader', 'register_page_handler' ) );
		add_filter( 'admin_title', array( 'WC_Admin_Loader', 'update_admin_title' ) );
		add_action( 'rest_api_init', array( 'WC_Admin_Loader', 'register_user_data' ) );
		add_action( 'in_admin_header', array( 'WC_Admin_Loader', 'embed_page_header' ) );
		add_filter( 'woocommerce_settings_groups', array( 'WC_Admin_Loader', 'add_settings_group' ) );
		add_filter( 'woocommerce_settings-wc_admin', array( 'WC_Admin_Loader', 'add_settings' ) );
		add_action( 'admin_head', array( 'WC_Admin_Loader', 'remove_notices' ) );
		add_action( 'admin_notices', array( 'WC_Admin_Loader', 'inject_before_notices' ) );
		add_action( 'admin_notices', array( 'WC_Admin_Loader', 'inject_after_notices' ), PHP_INT_MAX );

		// priority is 20 to run after https://github.com/woocommerce/woocommerce/blob/a55ae325306fc2179149ba9b97e66f32f84fdd9c/includes/admin/class-wc-admin-menus.php#L165.
		add_action( 'admin_head', array( 'WC_Admin_Loader', 'remove_app_entry_page_menu_item' ), 20 );
	}

	/**
	 * Gets an array of enabled WooCommerce Admin features/sections.
	 *
	 * @return bool Enabled Woocommerce Admin features/sections.
	 */
	public static function get_features() {
		return apply_filters( 'woocommerce_admin_features', array() );
	}

	/**
	 * Returns if a specific wc-admin feature is enabled.
	 *
	 * @param  string $feature Feature slug.
	 * @return bool Returns true if the feature is enabled.
	 */
	public static function is_feature_enabled( $feature ) {
		$features = self::get_features();
		return in_array( $feature, $features );
	}

	/**
	 * Gets the URL to an asset file.
	 *
	 * @param  string $file name.
	 * @return string URL to asset.
	 */
	public static function get_url( $file ) {
		return plugins_url( self::get_path( $file ) . $file, WC_ADMIN_PLUGIN_FILE );
	}

	/**
	 * Gets the file modified time as a cache buster if we're in dev mode, or the plugin version otherwise.
	 *
	 * @param string $file Local path to the file.
	 * @return string The cache buster value to use for the given file.
	 */
	public static function get_file_version( $file ) {
		if ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) {
			$file = trim( $file, '/' );
			return filemtime( WC_ADMIN_ABSPATH . self::get_path( $file ) );
		}
		return WC_ADMIN_VERSION_NUMBER;
	}

	/**
	 * Gets the path for the asset depending on file type.
	 *
	 * @param  string $file name.
	 * @return string Folder path of asset.
	 */
	private static function get_path( $file ) {
		return '.css' === substr( $file, -4 ) ? WC_ADMIN_DIST_CSS_FOLDER : WC_ADMIN_DIST_JS_FOLDER;
	}

	/**
	 * Class loader for enabled WooCommerce Admin features/sections.
	 */
	public static function load_features() {
		require_once WC_ADMIN_ABSPATH . 'includes/page-controller/class-wc-admin-page-controller.php';
		require_once WC_ADMIN_ABSPATH . 'includes/page-controller/page-controller-functions.php';

		$features = self::get_features();
		foreach ( $features as $feature ) {
			$feature = strtolower( $feature );
			$file    = WC_ADMIN_FEATURES_PATH . $feature . '/class-wc-admin-' . $feature . '.php';
			if ( file_exists( $file ) ) {
				require_once $file;
				$feature         = ucfirst( $feature );
				self::$classes[] = 'WC_Admin_' . $feature;
			}
		}
	}

	/**
	 * Registers a basic page handler for the app entry point.
	 *
	 * @todo The entry point for the embed needs moved to this class as well.
	 */
	public static function register_page_handler() {
		wc_admin_register_page(
			array(
				'id'     => 'woocommerce-dashboard', // Expected to be overridden if dashboard is enabled.
				'parent' => 'woocommerce',
				'title'  => null,
				'path'   => self::APP_ENTRY_POINT,
			)
		);

		// TODO: move this somewhere else?
		$admin_page_base    = 'admin.php';
		$posttype_list_base = 'edit.php';

		// WooCommerce > Settings > General (default tab).
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-settings',
				'screen_id' => 'woocommerce_page_wc-settings-general',
				'title'     => array(
					__( 'Settings', 'woocommerce-admin' ),
					__( 'General', 'woocommerce-admin' ),
				),
				'path'      => add_query_arg( 'page', 'wc-settings', $admin_page_base ),
			)
		);

		// WooCommerce > Settings > Products > General (default tab).
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-settings-products',
				'parent'    => 'woocommerce-settings',
				'screen_id' => 'woocommerce_page_wc-settings-products',
				'title'     => array(
					__( 'Products', 'woocommerce-admin' ),
					__( 'General', 'woocommerce-admin' ),
				),
				'path'      => add_query_arg(
					array(
						'page' => 'wc-settings',
						'tab'  => 'products',
					),
					$admin_page_base
				),
			)
		);

		// WooCommerce > Settings > Products > Inventory.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-settings-products-inventory',
				'parent'    => 'woocommerce-settings-products',
				'screen_id' => 'woocommerce_page_wc-settings-products-inventory',
				'title'     => __( 'Inventory', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Settings > Products > Downloadable products.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-settings-products-downloadable',
				'parent'    => 'woocommerce-settings-products',
				'screen_id' => 'woocommerce_page_wc-settings-products-downloadable',
				'title'     => __( 'Downloadable products', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Settings > Shipping > Shipping zones (default tab).
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-settings-shipping',
				'parent'    => 'woocommerce-settings',
				'screen_id' => 'woocommerce_page_wc-settings-shipping',
				'title'     => array(
					__( 'Shipping', 'woocommerce-admin' ),
					__( 'Shipping zones', 'woocommerce-admin' ),
				),
				'path'      => add_query_arg(
					array(
						'page' => 'wc-settings',
						'tab'  => 'shipping',
					),
					$admin_page_base
				),
			)
		);

		// WooCommerce > Settings > Shipping > Shipping zones > Edit zone.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-settings-edit-shipping-zone',
				'parent'    => 'woocommerce-settings',
				'screen_id' => 'woocommerce_page_wc-settings-shipping-edit_zone',
				'title'     => array(
					__( 'Shipping zones', 'woocommerce-admin' ),
					__( 'Edit zone', 'woocommerce-admin' ),
				),
				'path'      => add_query_arg(
					array(
						'page' => 'wc-settings',
						'tab'  => 'shipping',
					),
					$admin_page_base
				),
			)
		);

		// WooCommerce > Settings > Shipping > Shipping options.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-settings-shipping-options',
				'parent'    => 'woocommerce-settings-shipping',
				'screen_id' => 'woocommerce_page_wc-settings-shipping-options',
				'title'     => __( 'Shipping options', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Settings > Shipping > Shipping classes.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-settings-shipping-classes',
				'parent'    => 'woocommerce-settings-shipping',
				'screen_id' => 'woocommerce_page_wc-settings-shipping-classes',
				'title'     => __( 'Shipping classes', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Settings > Payments.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-settings-payments',
				'parent'    => 'woocommerce-settings',
				'screen_id' => 'woocommerce_page_wc-settings-checkout',
				'title'     => __( 'Payments', 'woocommerce-admin' ),
				'path'      => add_query_arg(
					array(
						'page' => 'wc-settings',
						'tab'  => 'checkout',
					),
					$admin_page_base
				),
			)
		);

		// WooCommerce > Settings > Payments > Direct bank transfer.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-settings-payments-bacs',
				'parent'    => 'woocommerce-settings-payments',
				'screen_id' => 'woocommerce_page_wc-settings-checkout-bacs',
				'title'     => __( 'Direct bank transfer', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Settings > Payments > Check payments.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-settings-payments-cheque',
				'parent'    => 'woocommerce-settings-payments',
				'screen_id' => 'woocommerce_page_wc-settings-checkout-cheque',
				'title'     => __( 'Check payments', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Settings > Payments > Cash on delivery.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-settings-payments-cod',
				'parent'    => 'woocommerce-settings-payments',
				'screen_id' => 'woocommerce_page_wc-settings-checkout-cod',
				'title'     => __( 'Cash on delivery', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Settings > Payments > PayPal.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-settings-payments-paypal',
				'parent'    => 'woocommerce-settings-payments',
				'screen_id' => 'woocommerce_page_wc-settings-checkout-paypal',
				'title'     => __( 'PayPal', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Settings > Accounts & Privacy.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-settings-accounts-privacy',
				'parent'    => 'woocommerce-settings',
				'screen_id' => 'woocommerce_page_wc-settings-account',
				'title'     => __( 'Accounts & Privacy', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Settings > Emails.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-settings-email',
				'parent'    => 'woocommerce-settings',
				'screen_id' => 'woocommerce_page_wc-settings-email',
				'title'     => __( 'Emails', 'woocommerce-admin' ),
				'path'      => add_query_arg(
					array(
						'page' => 'wc-settings',
						'tab'  => 'email',
					),
					$admin_page_base
				),
			)
		);

		// WooCommerce > Settings > Emails > Edit email (all email editing).
		$emails = array(
			'wc_email_new_order',
			'wc_email_cancelled_order',
			'wc_email_failed_order',
			'wc_email_customer_on_hold_order',
			'wc_email_customer_processing_order',
			'wc_email_customer_completed_order',
			'wc_email_customer_refunded_order',
			'wc_email_customer_invoice',
			'wc_email_customer_note',
			'wc_email_customer_reset_password',
			'wc_email_customer_new_account',
		);

		foreach ( $emails as $email ) {
			wc_admin_connect_page(
				array(
					'id'        => 'woocommerce-settings-email-' . $email,
					'parent'    => 'woocommerce-settings-email',
					'screen_id' => 'woocommerce_page_wc-settings-email-' . $email,
					'title'     => __( 'Edit email', 'woocommerce-admin' ),
				)
			);
		}

		// WooCommerce > Settings > Advanced > Page setup (default tab).
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-settings-advanced',
				'parent'    => 'woocommerce-settings',
				'screen_id' => 'woocommerce_page_wc-settings-advanced',
				'title'     => array(
					__( 'Advanced', 'woocommerce-admin' ),
					__( 'Page setup', 'woocommerce-admin' ),
				),
				'path'      => add_query_arg(
					array(
						'page' => 'wc-settings',
						'tab'  => 'advanced',
					),
					$admin_page_base
				),
			)
		);

		// WooCommerce > Settings > Advanced > REST API.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-settings-advanced-rest-api',
				'parent'    => 'woocommerce-settings-advanced',
				'screen_id' => 'woocommerce_page_wc-settings-advanced-keys',
				'title'     => __( 'REST API', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Settings > Advanced > Webhooks.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-settings-advanced-webhooks',
				'parent'    => 'woocommerce-settings-advanced',
				'screen_id' => 'woocommerce_page_wc-settings-advanced-webhooks',
				'title'     => __( 'Webhooks', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Settings > Advanced > Legacy API.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-settings-advanced-legacy-api',
				'parent'    => 'woocommerce-settings-advanced',
				'screen_id' => 'woocommerce_page_wc-settings-advanced-legacy_api',
				'title'     => __( 'Legacy API', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Settings > Advanced > WooCommerce.com.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-settings-advanced-woocommerce-com',
				'parent'    => 'woocommerce-settings-advanced',
				'screen_id' => 'woocommerce_page_wc-settings-advanced-woocommerce_com',
				'title'     => __( 'WooCommerce.com', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Orders.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-orders',
				'screen_id' => 'edit-shop_order',
				'title'     => __( 'Orders', 'woocommerce-admin' ),
				'path'      => add_query_arg( 'post_type', 'shop_order', $posttype_list_base ),
			)
		);

		// WooCommerce > Orders > Add New.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-add-order',
				'parent'    => 'woocommerce-orders',
				'screen_id' => 'shop_order-add',
				'title'     => __( 'Add New', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Orders > Edit Order.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-edit-order',
				'parent'    => 'woocommerce-orders',
				'screen_id' => 'shop_order',
				'title'     => __( 'Edit Order', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Coupons.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-coupons',
				'screen_id' => 'edit-shop_coupon',
				'title'     => __( 'Coupons', 'woocommerce-admin' ),
				'path'      => add_query_arg( 'post_type', 'shop_coupon', $posttype_list_base ),
			)
		);

		// WooCommerce > Coupons > Add New.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-add-coupon',
				'parent'    => 'woocommerce-coupons',
				'screen_id' => 'shop_coupon-add',
				'title'     => __( 'Add New', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Coupons > Edit Coupon.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-edit-coupon',
				'parent'    => 'woocommerce-coupons',
				'screen_id' => 'shop_coupon',
				'title'     => __( 'Edit Coupon', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Reports > Orders (default tab).
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-reports',
				'screen_id' => 'woocommerce_page_wc-reports-orders',
				'title'     => array(
					__( 'Reports', 'woocommerce-admin' ),
					__( 'Orders', 'woocommerce-admin' ),
				),
				'path'      => add_query_arg( 'page', 'wc-reports', $admin_page_base ),
			)
		);

		// WooCommerce > Reports > Customers.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-reports-customers',
				'parent'    => 'woocommerce-reports',
				'screen_id' => 'woocommerce_page_wc-reports-customers',
				'title'     => __( 'Customers', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Reports > Stock.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-reports-stock',
				'parent'    => 'woocommerce-reports',
				'screen_id' => 'woocommerce_page_wc-reports-stock',
				'title'     => __( 'Stock', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Reports > Taxes.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-reports-taxes',
				'parent'    => 'woocommerce-reports',
				'screen_id' => 'woocommerce_page_wc-reports-taxes',
				'title'     => __( 'Taxes', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Status > System status (default tab).
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-status',
				'screen_id' => 'woocommerce_page_wc-status-status',
				'title'     => array(
					__( 'Status', 'woocommerce-admin' ),
					__( 'System status', 'woocommerce-admin' ),
				),
				'path'      => add_query_arg( 'page', 'wc-status', $admin_page_base ),
			)
		);

		// WooCommerce > Status > Tools.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-status-tools',
				'parent'    => 'woocommerce-status',
				'screen_id' => 'woocommerce_page_wc-status-tools',
				'title'     => __( 'Tools', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Status > Logs.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-status-logs',
				'parent'    => 'woocommerce-status',
				'screen_id' => 'woocommerce_page_wc-status-tools',
				'title'     => __( 'Tools', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Status > Scheduled Actions.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-status-action-scheduler',
				'parent'    => 'woocommerce-status',
				'screen_id' => 'woocommerce_page_wc-status-action-scheduler',
				'title'     => __( 'Scheduled Actions', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Extensions > Browse Extensions (default tab).
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-addons',
				'screen_id' => 'woocommerce_page_wc-addons-browse-extensions',
				'title'     => array(
					__( 'Extensions', 'woocommerce-admin' ),
					__( 'Browse Extensions', 'woocommerce-admin' ),
				),
				'path'      => add_query_arg( 'page', 'wc-addons', $admin_page_base ),
			)
		);

		// WooCommerce > Extensions > WooCommerce.com Subscriptions.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-addons-subscriptions',
				'parent'    => 'woocommerce-addons',
				'screen_id' => 'woocommerce_page_wc-addons-browse-extensions-helper',
				'title'     => __( 'WooCommerce.com Subscriptions', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Products.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-products',
				'screen_id' => 'edit-product',
				'title'     => __( 'Products', 'woocommerce-admin' ),
				'path'      => add_query_arg( 'post_type', 'product', $posttype_list_base ),
			)
		);

		// WooCommerce > Products > Add New.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-add-product',
				'parent'    => 'woocommerce-products',
				'screen_id' => 'product-add',
				'title'     => __( 'Add New', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Products > Edit Order.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-edit-product',
				'parent'    => 'woocommerce-products',
				'screen_id' => 'product',
				'title'     => __( 'Edit Product', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Products > Import Products.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-import-products',
				'parent'    => 'woocommerce-products',
				'screen_id' => 'product_page_product_importer',
				'title'     => __( 'Import Products', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Products > Export Products.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-export-products',
				'parent'    => 'woocommerce-products',
				'screen_id' => 'product_page_product_exporter',
				'title'     => __( 'Export Products', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Products > Product categories.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-product-categories',
				'parent'    => 'woocommerce-products',
				'screen_id' => 'edit-product_cat',
				'title'     => __( 'Product categories', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Products > Edit category.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-product-edit-category',
				'parent'    => 'woocommerce-products',
				'screen_id' => 'product_cat',
				'title'     => __( 'Edit category', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Products > Product tags.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-product-tags',
				'parent'    => 'woocommerce-products',
				'screen_id' => 'edit-product_tag',
				'title'     => __( 'Product tags', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Products > Edit tag.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-product-edit-tag',
				'parent'    => 'woocommerce-products',
				'screen_id' => 'product_tag',
				'title'     => __( 'Edit tag', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Products > Attributes.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-product-attributes',
				'parent'    => 'woocommerce-products',
				'screen_id' => 'product_page_product_attributes',
				'title'     => __( 'Attributes', 'woocommerce-admin' ),
			)
		);

		// WooCommerce > Products > Edit attribute.
		wc_admin_connect_page(
			array(
				'id'        => 'woocommerce-product-edit-attribute',
				'parent'    => 'woocommerce-products',
				'screen_id' => 'product_page_product_attribute-edit',
				'title'     => __( 'Edit attribute', 'woocommerce-admin' ),
			)
		);
	}

	/**
	 * Remove the menu item for the app entry point page.
	 */
	public static function remove_app_entry_page_menu_item() {
		global $submenu;
		// User does not have capabilites to see the submenu.
		if ( ! current_user_can( 'manage_woocommerce' ) || empty( $submenu['woocommerce'] ) ) {
			return;
		}

		$wc_admin_key = null;
		foreach ( $submenu['woocommerce'] as $submenu_key => $submenu_item ) {
			// Our app entry page menu item has no title.
			if ( is_null( $submenu_item[0] ) && self::APP_ENTRY_POINT === $submenu_item[2] ) {
				$wc_admin_key = $submenu_key;
				break;
			}
		}

		if ( ! $wc_admin_key ) {
			return;
		}

		unset( $submenu['woocommerce'][ $wc_admin_key ] );
	}

	/**
	 * Registers all the neccessary scripts and styles to show the admin experience.
	 */
	public static function register_scripts() {
		if ( ! function_exists( 'wp_set_script_translations' ) ) {
			return;
		}

		wp_register_script(
			'wc-csv',
			self::get_url( 'csv-export/index.js' ),
			array(),
			self::get_file_version( 'csv-export/index.js' ),
			true
		);

		wp_register_script(
			'wc-currency',
			self::get_url( 'currency/index.js' ),
			array( 'wc-number' ),
			self::get_file_version( 'currency/index.js' ),
			true
		);

		wp_set_script_translations( 'wc-currency', 'woocommerce-admin' );

		wp_register_script(
			'wc-navigation',
			self::get_url( 'navigation/index.js' ),
			array(),
			self::get_file_version( 'navigation/index.js' ),
			true
		);

		wp_register_script(
			'wc-number',
			self::get_url( 'number/index.js' ),
			array(),
			self::get_file_version( 'number/index.js' ),
			true
		);

		wp_register_script(
			'wc-date',
			self::get_url( 'date/index.js' ),
			array( 'wp-date', 'wp-i18n' ),
			self::get_file_version( 'date/index.js' ),
			true
		);

		wp_set_script_translations( 'wc-date', 'woocommerce-admin' );

		wp_register_script(
			'wc-components',
			self::get_url( 'components/index.js' ),
			array(
				'wp-components',
				'wp-data',
				'wp-element',
				'wp-hooks',
				'wp-i18n',
				'wp-keycodes',
				'wc-csv',
				'wc-currency',
				'wc-date',
				'wc-navigation',
				'wc-number',
			),
			self::get_file_version( 'components/index.js' ),
			true
		);

		wp_set_script_translations( 'wc-components', 'woocommerce-admin' );

		wp_register_style(
			'wc-components',
			self::get_url( 'components/style.css' ),
			array( 'wp-edit-blocks' ),
			self::get_file_version( 'components/style.css' )
		);
		wp_style_add_data( 'wc-components', 'rtl', 'replace' );

		wp_register_style(
			'wc-components-ie',
			self::get_url( 'components/ie.css' ),
			array( 'wp-edit-blocks' ),
			self::get_file_version( 'components/ie.css' )
		);
		wp_style_add_data( 'wc-components-ie', 'rtl', 'replace' );

		$entry = 'app';
		if ( self::is_embed_page() ) {
			$entry = 'embedded';
		}

		wp_register_script(
			WC_ADMIN_APP,
			self::get_url( "{$entry}/index.js" ),
			array( 'wc-components', 'wc-navigation', 'wp-date', 'wp-html-entities', 'wp-keycodes', 'wp-i18n' ),
			self::get_file_version( "{$entry}/index.js" ),
			true
		);

		wp_set_script_translations( WC_ADMIN_APP, 'woocommerce-admin' );

		wp_register_style(
			WC_ADMIN_APP,
			self::get_url( "{$entry}/style.css" ),
			array( 'wc-components' ),
			self::get_file_version( "{$entry}/style.css" )
		);
		wp_style_add_data( WC_ADMIN_APP, 'rtl', 'replace' );
	}

	/**
	 * Loads the required scripts on the correct pages.
	 */
	public static function load_scripts() {
		if ( ! self::is_admin_page() && ! self::is_embed_page() ) {
			return;
		}

		wp_enqueue_script( WC_ADMIN_APP );
		wp_enqueue_style( WC_ADMIN_APP );

		// Use server-side detection to prevent unneccessary stylesheet loading in other browsers.
		$user_agent = isset( $_SERVER['HTTP_USER_AGENT'] ) ? $_SERVER['HTTP_USER_AGENT'] : ''; // WPCS: sanitization ok.
		preg_match( '/MSIE (.*?);/', $user_agent, $matches );
		if ( count( $matches ) < 2 ) {
			preg_match( '/Trident\/\d{1,2}.\d{1,2}; rv:([0-9]*)/', $user_agent, $matches );
		}
		if ( count( $matches ) > 1 ) {
			wp_enqueue_style( 'wc-components-ie' );
		}

	}

	/**
	 * Returns true if we are on a JS powered admin page.
	 */
	public static function is_admin_page() {
		return wc_admin_is_registered_page();
	}

	/**
	 *  Returns true if we are on a "classic" (non JS app) powered admin page.
	 *
	 * @todo See usage in `admin.php`. This needs refactored and implemented properly in core.
	 */
	public static function is_embed_page() {
		return wc_admin_is_connected_page();
	}

	/**
	 * Returns breadcrumbs for the current page.
	 */
	private static function get_embed_breadcrumbs() {
		return wc_admin_get_breadcrumbs();
	}

	/**
	 * Outputs breadcrumbs via PHP for the initial load of an embedded page.
	 *
	 * @param array $section Section to create breadcrumb from.
	 */
	private static function output_breadcrumbs( $section ) {
		?>
		<span>
		<?php if ( is_array( $section ) ) : ?>
			<a href="<?php echo esc_url( admin_url( $section[0] ) ); ?>"><?php echo esc_html( $section[1] ); ?></a>
		<?php else : ?>
			<?php echo esc_html( $section ); ?>
		<?php endif; ?>
		</span>
		<?php
	}

	/**
	 * Set up a div for the header embed to render into.
	 * The initial contents here are meant as a place loader for when the PHP page initialy loads.
	 */
	public static function embed_page_header() {
		if ( ! self::is_embed_page() ) {
			return;
		}

		$sections = self::get_embed_breadcrumbs();
		$sections = is_array( $sections ) ? $sections : array( $sections );
		?>
		<div id="woocommerce-embedded-root">
			<div class="woocommerce-layout">
				<div class="woocommerce-layout__header is-embed-loading">
					<h1 class="woocommerce-layout__header-breadcrumbs">
					<span>
						<a href="<?php echo esc_url( admin_url( 'admin.php?page=wc-admin#/' ) ); ?>"><?php esc_html_e( 'WooCommerce', 'woocommerce-admin' ); ?></a>
					</span>
						<?php foreach ( $sections as $section ) : ?>
							<?php self::output_breadcrumbs( $section ); ?>
						<?php endforeach; ?>
					</h1>
				</div>
			</div>
			<div class="woocommerce-layout__primary is-embed-loading" id="woocommerce-layout__primary">
				<div id="woocommerce-layout__notice-list" class="woocommerce-layout__notice-list"></div>
			</div>
		</div>
		<?php
	}

	/**
	 * Adds body classes to the main wp-admin wrapper, allowing us to better target elements in specific scenarios.
	 *
	 * @param string $admin_body_class Body class to add.
	 */
	public static function add_admin_body_classes( $admin_body_class = '' ) {
		global $hook_suffix;

		if ( ! self::is_admin_page() && ! self::is_embed_page() ) {
			return $admin_body_class;
		}

		$classes   = explode( ' ', trim( $admin_body_class ) );
		$classes[] = 'woocommerce-page';
		if ( self::is_embed_page() ) {
			$classes[] = 'woocommerce-embed-page';
		}

		$features = self::get_features();
		foreach ( $features as $feature_key ) {
			$classes[] = sanitize_html_class( 'woocommerce-feature-enabled-' . $feature_key );
		}

		$admin_body_class = implode( ' ', array_unique( $classes ) );
		return " $admin_body_class ";
	}


	/**
	 * Removes notices that should not be displayed on WC Admin pages.
	 */
	public static function remove_notices() {
		if ( ! self::is_admin_page() && ! self::is_embed_page() ) {
			return;
		}

		// Hello Dolly.
		if ( function_exists( 'hello_dolly' ) ) {
			remove_action( 'admin_notices', 'hello_dolly' );
		}
	}

	/**
	 * Runs before admin notices action and hides them.
	 */
	public static function inject_before_notices() {
		if ( ( ! self::is_admin_page() && ! self::is_embed_page() ) ) {
			return;
		}
		echo '<div class="woocommerce-layout__notice-list-hide" id="wp__notice-list">';
		echo '<div class="wp-header-end" id="woocommerce-layout__notice-catcher"></div>'; // https://github.com/WordPress/WordPress/blob/f6a37e7d39e2534d05b9e542045174498edfe536/wp-admin/js/common.js#L737.
	}

	/**
	 * Runs after admin notices and closes div.
	 */
	public static function inject_after_notices() {
		if ( ( ! self::is_admin_page() && ! self::is_embed_page() ) ) {
			return;
		}
		echo '</div>';
	}

	/**
	 * Edits Admin title based on section of wc-admin.
	 *
	 * @param string $admin_title Modifies admin title.
	 * @todo Can we do some URL rewriting so we can figure out which page they are on server side?
	 */
	public static function update_admin_title( $admin_title ) {
		if ( ! self::is_admin_page() && ! self::is_embed_page() ) {
			return $admin_title;
		}

		$sections = self::get_embed_breadcrumbs();
		$pieces   = array();

		foreach ( $sections as $section ) {
			$pieces[] = is_array( $section ) ? $section[1] : $section;
		}

		$pieces = array_reverse( $pieces );
		$title  = implode( ' &lsaquo; ', $pieces );

		/* translators: %1$s: updated title, %2$s: blog info name */
		return sprintf( __( '%1$s &lsaquo; %2$s', 'woocommerce-admin' ), $title, get_bloginfo( 'name' ) );
	}

	/**
	 * Set up a div for the app to render into.
	 */
	public static function page_wrapper() {
		?>
		<div class="wrap">
			<div id="root"></div>
		</div>
		<?php
	}

	/**
	 * Hooks extra neccessary data into the component settings array already set in WooCommerce core.
	 *
	 * @param array $settings Array of component settings.
	 * @return array Array of component settings.
	 */
	public static function add_component_settings( $settings ) {
		$preload_data_endpoints = apply_filters( 'woocommerce_component_settings_preload_endpoints', array( '/wc/v3' ) );
		if ( ! empty( $preload_data_endpoints ) ) {
			$preload_data = array_reduce(
				array_values( $preload_data_endpoints ),
				'rest_preload_api_request'
			);
		}

		$current_user_data = array();
		foreach ( self::get_user_data_fields() as $user_field ) {
			$current_user_data[ $user_field ] = json_decode( get_user_meta( get_current_user_id(), 'wc_admin_' . $user_field, true ) );
		}

		$settings['orderStatuses']     = self::get_order_statuses( wc_get_order_statuses() );
		$settings['currentUserData']   = $current_user_data;
		$settings['currency']          = self::get_currency_settings();
		$settings['reviewsEnabled']    = get_option( 'woocommerce_enable_reviews' );
		$settings['manageStock']       = get_option( 'woocommerce_manage_stock' );
		$settings['commentModeration'] = get_option( 'comment_moderation' );
		// @todo On merge, once plugin images are added to core WooCommerce, `wcAdminAssetUrl` can be retired,
		// and `wcAssetUrl` can be used in its place throughout the codebase.
		$settings['wcAdminAssetUrl'] = plugins_url( 'images/', plugin_dir_path( dirname( __FILE__ ) ) . 'woocommerce-admin.php' );

		if ( ! empty( $preload_data_endpoints ) ) {
			foreach ( $preload_data_endpoints as $key => $endpoint ) {
				$settings['dataEndpoints'][ $key ] = $preload_data[ $endpoint ]['body'];
			}
		}
		$settings = self::get_custom_settings( $settings );

		if ( self::is_embed_page() ) {
			$settings['embedBreadcrumbs'] = self::get_embed_breadcrumbs();
		}

		return $settings;
	}

	/**
	 * Format order statuses by removing a leading 'wc-' if present.
	 *
	 * @param array $statuses Order statuses.
	 * @return array formatted statuses.
	 */
	public static function get_order_statuses( $statuses ) {
		$formatted_statuses = array();
		foreach ( $statuses as $key => $value ) {
			$formatted_key                        = preg_replace( '/^wc-/', '', $key );
			$formatted_statuses[ $formatted_key ] = $value;
		}
		return $formatted_statuses;
	}

	/**
	 * Register the admin settings for use in the WC REST API
	 *
	 * @param array $groups Array of setting groups.
	 * @return array
	 */
	public static function add_settings_group( $groups ) {
		$groups[] = array(
			'id'          => 'wc_admin',
			'label'       => __( 'WooCommerce Admin', 'woocommerce-admin' ),
			'description' => __( 'Settings for WooCommerce admin reporting.', 'woocommerce-admin' ),
		);
		return $groups;
	}

	/**
	 * Add WC Admin specific settings
	 *
	 * @param array $settings Array of settings in wc admin group.
	 * @return array
	 */
	public static function add_settings( $settings ) {
		$statuses   = self::get_order_statuses( wc_get_order_statuses() );
		$settings[] = array(
			'id'          => 'woocommerce_excluded_report_order_statuses',
			'option_key'  => 'woocommerce_excluded_report_order_statuses',
			'label'       => __( 'Excluded report order statuses', 'woocommerce-admin' ),
			'description' => __( 'Statuses that should not be included when calculating report totals.', 'woocommerce-admin' ),
			'default'     => array( 'pending', 'cancelled', 'failed' ),
			'type'        => 'multiselect',
			'options'     => $statuses,
		);
		$settings[] = array(
			'id'          => 'woocommerce_actionable_order_statuses',
			'option_key'  => 'woocommerce_actionable_order_statuses',
			'label'       => __( 'Actionable order statuses', 'woocommerce-admin' ),
			'description' => __( 'Statuses that require extra action on behalf of the store admin.', 'woocommerce-admin' ),
			'default'     => array( 'processing', 'on-hold' ),
			'type'        => 'multiselect',
			'options'     => $statuses,
		);
		return $settings;
	}

	/**
	 * Gets custom settings used for WC Admin.
	 *
	 * @param array $settings Array of settings to merge into.
	 * @return array
	 */
	public static function get_custom_settings( $settings ) {
		$wc_rest_settings_options_controller = new WC_REST_Setting_Options_Controller();
		$wc_admin_group_settings             = $wc_rest_settings_options_controller->get_group_settings( 'wc_admin' );
		$settings['wcAdminSettings']         = array();

		foreach ( $wc_admin_group_settings as $setting ) {
			if ( ! empty( $setting['id'] ) && ! empty( $setting['value'] ) ) {
				$settings['wcAdminSettings'][ $setting['id'] ] = $setting['value'];
			}
		}
		return $settings;
	}

	/**
	 * Return an object defining the currecy options for the site's current currency
	 *
	 * @return  array  Settings for the current currency {
	 *     Array of settings.
	 *
	 *     @type string $code       Currency code.
	 *     @type string $precision  Number of decimals.
	 *     @type string $symbol     Symbol for currency.
	 * }
	 */
	public static function get_currency_settings() {
		$code = get_woocommerce_currency();

		return apply_filters(
			'wc_currency_settings',
			array(
				'code'               => $code,
				'precision'          => wc_get_price_decimals(),
				'symbol'             => html_entity_decode( get_woocommerce_currency_symbol( $code ) ),
				'position'           => get_option( 'woocommerce_currency_pos' ),
				'decimal_separator'  => wc_get_price_decimal_separator(),
				'thousand_separator' => wc_get_price_thousand_separator(),
				'price_format'       => html_entity_decode( get_woocommerce_price_format() ),
			)
		);
	}

	/**
	 * Registers WooCommerce specific user data to the WordPress user API.
	 */
	public static function register_user_data() {
		register_rest_field(
			'user',
			'woocommerce_meta',
			array(
				'get_callback'    => array( 'WC_Admin_Loader', 'get_user_data_values' ),
				'update_callback' => array( 'WC_Admin_Loader', 'update_user_data_values' ),
				'schema'          => null,
			)
		);
	}

	/**
	 * For all the registered user data fields (  WC_Admin_Loader::get_user_data_fields ), fetch the data
	 * for returning via the REST API.
	 *
	 * @param WP_User $user Current user.
	 */
	public static function get_user_data_values( $user ) {
		$values = array();
		foreach ( self::get_user_data_fields() as $field ) {
			$values[ $field ] = get_user_meta( $user['id'], 'wc_admin_' . $field, true );
		}
		return $values;
	}

	/**
	 * For all the registered user data fields ( WC_Admin_Loader::get_user_data_fields ), update the data
	 * for the REST API.
	 *
	 * @param array   $values   The new values for the meta.
	 * @param WP_User $user     The current user.
	 * @param string  $field_id The field id for the user meta.
	 */
	public static function update_user_data_values( $values, $user, $field_id ) {
		if ( empty( $values ) || ! is_array( $values ) || 'woocommerce_meta' !== $field_id ) {
			return;
		}
		$fields  = self::get_user_data_fields();
		$updates = array();
		foreach ( $values as $field => $value ) {
			if ( in_array( $field, $fields, true ) ) {
				$updates[ $field ] = $value;
				update_user_meta( $user->ID, 'wc_admin_' . $field, $value );
			}
		}
		return $updates;
	}

	/**
	 * We store some WooCommerce specific user meta attached to users endpoint,
	 * so that we can track certain preferences or values such as the inbox activity panel last open time.
	 * Additional fields can be added in the function below, and then used via wc-admin's currentUser data.
	 *
	 * @return array Fields to expose over the WP user endpoint.
	 */
	public static function get_user_data_fields() {
		return apply_filters( 'wc_admin_get_user_data_fields', array() );
	}
}

new WC_Admin_Loader();
