<?php
/**
 * This file was automatically generated by automattic/jetpack-autoloader.
 *
 * @package automattic/jetpack-autoloader
 */

namespace Automattic\Jetpack\Autoloader\jpf90f3929bf2f5528ad3cbdc08fa40db6;

 // phpcs:ignore

/**
 * This class provides information about the current plugin and the site's active plugins.
 */
class Plugins_Handler {

	/**
	 * Returns an array containing the paths of all active plugins and all known activating plugins.
	 *
	 * @return array An array of plugin paths as strings or an empty array.
	 */
	public function get_all_active_plugins_paths() {
		global $jetpack_autoloader_activating_plugins_paths;

		$active_plugins_paths     = $this->get_active_plugins_paths();
		$multisite_plugins_paths  = $this->get_multisite_plugins_paths();
		$activating_plugins_paths = $this->get_plugins_activating_via_request();

		return array_unique(
			array_merge(
				$active_plugins_paths,
				$activating_plugins_paths,
				$multisite_plugins_paths,
				(array) $jetpack_autoloader_activating_plugins_paths
			)
		);
	}

	/**
	 * Returns an array containing the paths of the active sitewide plugins in a multisite environment.
	 *
	 * @return array The paths of the active sitewide plugins or an empty array.
	 */
	protected function get_multisite_plugins_paths() {
		$plugin_slugs = is_multisite()
			? array_keys( get_site_option( 'active_sitewide_plugins', array() ) )
			: array();

		$plugin_slugs = array_filter( $plugin_slugs, array( $this, 'is_directory_plugin' ) );
		return array_map( array( $this, 'create_plugin_path' ), $plugin_slugs );
	}

	/**
	 * Returns an array containing the paths of the currently active plugins.
	 *
	 * @return array The active plugins' paths or an empty array.
	 */
	protected function get_active_plugins_paths() {
		$plugin_slugs = (array) get_option( 'active_plugins', array() );
		$plugin_slugs = array_filter( $plugin_slugs, array( $this, 'is_directory_plugin' ) );
		return array_map( array( $this, 'create_plugin_path' ), $plugin_slugs );
	}

	/**
	 * Adds the plugin directory from the WP_PLUGIN_DIR constant to the plugin slug.
	 *
	 * @param string $plugin_slug The plugin slug.
	 */
	private function create_plugin_path( $plugin_slug ) {
		$plugin_dir = str_replace( '\\', '/', WP_PLUGIN_DIR );
		return trailingslashit( $plugin_dir ) . substr( $plugin_slug, 0, strrpos( $plugin_slug, '/' ) );
	}

	/**
	 * Ensure the plugin has its own directory and not a single-file plugin.
	 *
	 * @param string $plugin Plugin name, may be prefixed with "/".
	 *
	 * @return bool
	 */
	public function is_directory_plugin( $plugin ) {
		return strlen( $plugin ) > 1 && false !== strpos( $plugin, '/', 1 );
	}

	/**
	 * Returns an array containing the names of plugins that are activating via a request.
	 *
	 * @return array An array of names of the activating plugins or an empty array.
	 */
	private function get_plugins_activating_via_request() {

		// phpcs:disable WordPress.Security.NonceVerification.Recommended
		// phpcs:disable WordPress.Security.ValidatedSanitizedInput.MissingUnslash
		// phpcs:disable WordPress.Security.ValidatedSanitizedInput.InputNotSanitized

		$action = isset( $_REQUEST['action'] ) ? $_REQUEST['action'] : false;
		$plugin = isset( $_REQUEST['plugin'] ) ? $_REQUEST['plugin'] : false;
		$nonce  = isset( $_REQUEST['_wpnonce'] ) ? $_REQUEST['_wpnonce'] : false;

		/**
		 * Note: we're not actually checking the nonce here becase it's too early
		 * in the execution. The pluggable functions are not yet loaded to give
		 * plugins a chance to plug their versions. Therefore we're doing the bare
		 * minimum: checking whether the nonce exists and it's in the right place.
		 * The request will fail later if the nonce doesn't pass the check.
		 */

		// In case of a single plugin activation there will be a plugin slug.
		if ( 'activate' === $action && ! empty( $nonce ) ) {
			return array( $this->create_plugin_path( wp_unslash( $plugin ) ) );
		}

		$plugins = isset( $_REQUEST['checked'] ) ? $_REQUEST['checked'] : array();

		// In case of bulk activation there will be an array of plugins.
		if ( 'activate-selected' === $action && ! empty( $nonce ) ) {
			$plugin_slugs = array_map( 'wp_unslash', $plugins );
			return array_map( array( $this, 'create_plugin_path' ), $plugin_slugs );
		}

		// phpcs:enable WordPress.Security.NonceVerification.Recommended
		// phpcs:enable WordPress.Security.ValidatedSanitizedInput.MissingUnslash
		// phpcs:enable WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
		return array();
	}

	/**
	 * Returns the path of the current plugin.
	 *
	 * @return string The path of the current plugin.
	 */
	public function get_current_plugin_path() {
		$vendor_path = str_replace( '\\', '/', dirname( dirname( __FILE__ ) ) );
		// Path to the plugin's folder (the parent of the vendor/jetpack-autoloader folder).
		return substr( $vendor_path, 0, strrpos( $vendor_path, '/' ) );
	}
}
