<?php
/**
 * Duotone block support flag.
 *
 * @package gutenberg
 */

/**
 * Registers the style and colors block attributes for block types that support it.
 *
 * @param WP_Block_Type $block_type Block Type.
 */
function gutenberg_register_duotone_support( $block_type ) {
	return WP_Duotone_Gutenberg::get_instance()->register_duotone_support( $block_type );
}

/**
 * Pre-computes and saves all possible duotone presets from global and theme styles for later use.
 */
function gutenberg_set_duotone_global_styles_presets() {
	return WP_Duotone_Gutenberg::get_instance()->set_global_styles_presets();
}

/**
 * Pre-computes and saves all block names from global styles for later use.
 */
function gutenberg_set_duotone_global_style_block_names() {
	return WP_Duotone_Gutenberg::get_instance()->set_global_style_block_names();
}

/**
 * Renders the block with duotone support classes added and enqueues the necessary styles and SVGs for it.
 *
 * @param string $block_content Rendered block content.
 * @param array  $block         Block object.
 *
 * @return string Filtered block content.
 */
function gutenberg_render_duotone_support( $block_content, $block ) {
	return WP_Duotone_Gutenberg::get_instance()->render_duotone_support( $block_content, $block );
}

/**
 * Enqueues duotone block styles in core-block-supports-inline-css BEFORE (priority 9) the style engine outputs them in gutenberg_enqueue_stored_styles.
 */
function gutenberg_output_duotone_block_styles() {
	return WP_Duotone_Gutenberg::get_instance()->output_block_styles();
}

/**
 * Enqueues duotone global styles in global-styles-inline-css AFTER (priority 11) the other global styles are enqueued in gutenberg_enqueue_global_styles.
 */
function gutenberg_output_duotone_global_styles() {
	return WP_Duotone_Gutenberg::get_instance()->output_global_styles();
}

/**
 * Add SVG filters to the footer. Also, for classic themes, output block styles in core-block-supports-inline-css.
 */
function gutenberg_output_duotone_footer_assets() {
	return WP_Duotone_Gutenberg::get_instance()->output_footer_assets();
}

/**
 * Add styles and SVGs to the editor settings for use in the editor via the EditorStyles component.
 *
 * @param array $settings Block editor settings from the `block_editor_settings_all` filter.
 *
 * @return array Editor settings with duotone SVGs and CSS custom properties.
 */
function gutenberg_add_duotone_editor_settings( $settings ) {
	return WP_Duotone_Gutenberg::get_instance()->add_editor_settings( $settings );
}

/**
 * Migrate the old experimental duotone support flag to its stabilized location under `supports.filter.duotone`.
 *
 * @param array $settings Current block type settings.
 * @param array $metadata Block metadata as read in via block.json.
 *
 * @return array Filtered block type settings.
 */
function gutenberg_migrate_experimental_duotone_support_flag( $settings, $block_type ) {
	return WP_Duotone_Gutenberg::get_instance()->migrate_experimental_duotone_support_flag( $settings, $block_type );
}

/**
 * Replace WordPress core actions/filters with their Gutenberg versions.
 */

// Register the block support. (overrides core one)
WP_Block_Supports::get_instance()->register(
	'duotone',
	array(
		'register_attribute' => 'gutenberg_register_duotone_support',
	)
);

if ( function_exists( 'wp_set_duotone_global_styles_presets' ) ) {
	remove_action( 'wp_loaded', 'wp_set_duotone_global_styles_presets' );
}
add_action( 'wp_loaded', 'gutenberg_set_duotone_global_styles_presets', 10 );

if ( function_exists( 'wp_set_duotone_global_style_block_names' ) ) {
	remove_action( 'wp_loaded', 'wp_set_duotone_global_style_block_names' );
}
add_action( 'wp_loaded', 'gutenberg_set_duotone_global_style_block_names', 10 );

if ( function_exists( 'wp_render_duotone_support' ) ) {
	remove_filter( 'render_block', 'wp_render_duotone_support' );
}
add_filter( 'render_block', 'gutenberg_render_duotone_support', 10, 2 );

if ( function_exists( 'wp_output_duotone_block_styles' ) ) {
	remove_action( 'wp_enqueue_scripts', 'wp_output_duotone_block_styles' );
}
add_action( 'wp_enqueue_scripts', 'gutenberg_output_duotone_block_styles', 9 );

if ( function_exists( 'wp_output_duotone_global_styles' ) ) {
	remove_action( 'wp_enqueue_scripts', 'wp_output_duotone_global_styles' );
}
add_action( 'wp_enqueue_scripts', 'gutenberg_output_duotone_global_styles', 11 );

if ( function_exists( 'wp_output_duotone_footer_assets' ) ) {
	remove_action( 'wp_footer', 'wp_output_duotone_footer_assets' );
}
add_action( 'wp_footer', 'gutenberg_output_duotone_footer_assets', 10 );

if ( function_exists( 'wp_add_duotone_editor_settings' ) ) {
	remove_filter( 'block_editor_settings_all', 'wp_add_duotone_editor_settings' );
}
add_filter( 'block_editor_settings_all', 'gutenberg_add_duotone_editor_settings', 10 );

if ( function_exists( 'wp_migrate_experimental_duotone_support_flag' ) ) {
	remove_filter( 'block_type_metadata_settings', 'wp_migrate_experimental_duotone_support_flag' );
}
add_filter( 'block_type_metadata_settings', 'gutenberg_migrate_experimental_duotone_support_flag', 10, 2 );

/*
 * Deprecated functions below. All new functions should be added in class-wp-duotone-gutenberg.php.
 */

/**
 * Direct port of tinycolor's bound01 function, lightly simplified to maintain
 * consistency with tinycolor.
 *
 * @see https://github.com/bgrins/TinyColor
 *
 * @deprecated 6.3.0
 *
 * @param  mixed $n   Number of unknown type.
 * @param  int   $max Upper value of the range to bound to.
 * @return float      Value in the range [0,1].
 */
function gutenberg_tinycolor_bound01( $n, $max ) {
	_deprecated_function( __FUNCTION__, '6.3.0' );

	if ( 'string' === gettype( $n ) && str_contains( $n, '.' ) && 1 === (float) $n ) {
		$n = '100%';
	}

	$n = min( $max, max( 0, (float) $n ) );

	// Automatically convert percentage into number.
	if ( 'string' === gettype( $n ) && str_contains( $n, '%' ) ) {
		$n = (int) ( $n * $max ) / 100;
	}

	// Handle floating point rounding errors.
	if ( ( abs( $n - $max ) < 0.000001 ) ) {
		return 1.0;
	}

	// Convert into [0, 1] range if it isn't already.
	return ( $n % $max ) / (float) $max;
}

/**
 * Direct port of tinycolor's boundAlpha function to maintain consistency with
 * how tinycolor works.
 *
 * @see https://github.com/bgrins/TinyColor
 *
 * @deprecated 6.3.0
 *
 * @param  mixed $n   Number of unknown type.
 * @return float      Value in the range [0,1].
 */
function gutenberg_tinycolor_bound_alpha( $n ) {
	_deprecated_function( __FUNCTION__, '6.3.0' );

	if ( is_numeric( $n ) ) {
		$n = (float) $n;
		if ( $n >= 0 && $n <= 1 ) {
			return $n;
		}
	}
	return 1;
}

/**
 * Round and convert values of an RGB object.
 *
 * @see https://github.com/bgrins/TinyColor
 *
 * @deprecated 6.3.0
 *
 * @param  array $rgb_color RGB object.
 * @return array            Rounded and converted RGB object.
 */
function gutenberg_tinycolor_rgb_to_rgb( $rgb_color ) {
	_deprecated_function( __FUNCTION__, '6.3.0' );

	return array(
		'r' => gutenberg_tinycolor_bound01( $rgb_color['r'], 255 ) * 255,
		'g' => gutenberg_tinycolor_bound01( $rgb_color['g'], 255 ) * 255,
		'b' => gutenberg_tinycolor_bound01( $rgb_color['b'], 255 ) * 255,
	);
}

/**
 * Helper function for hsl to rgb conversion.
 *
 * @see https://github.com/bgrins/TinyColor
 *
 * @deprecated 6.3.0
 *
 * @param  float $p first component.
 * @param  float $q second component.
 * @param  float $t third component.
 * @return float    R, G, or B component.
 */
function gutenberg_tinycolor_hue_to_rgb( $p, $q, $t ) {
	_deprecated_function( __FUNCTION__, '6.3.0' );

	if ( $t < 0 ) {
		++$t;
	}
	if ( $t > 1 ) {
		--$t;
	}
	if ( $t < 1 / 6 ) {
		return $p + ( $q - $p ) * 6 * $t;
	}
	if ( $t < 1 / 2 ) {
		return $q;
	}
	if ( $t < 2 / 3 ) {
		return $p + ( $q - $p ) * ( 2 / 3 - $t ) * 6;
	}
	return $p;
}

/**
 * Convert an HSL object to an RGB object with converted and rounded values.
 *
 * @see https://github.com/bgrins/TinyColor
 *
 * @deprecated 6.3.0
 *
 * @param  array $hsl_color HSL object.
 * @return array            Rounded and converted RGB object.
 */
function gutenberg_tinycolor_hsl_to_rgb( $hsl_color ) {
	_deprecated_function( __FUNCTION__, '6.3.0' );

	$h = gutenberg_tinycolor_bound01( $hsl_color['h'], 360 );
	$s = gutenberg_tinycolor_bound01( $hsl_color['s'], 100 );
	$l = gutenberg_tinycolor_bound01( $hsl_color['l'], 100 );

	if ( 0 === $s ) {
		// Achromatic.
		$r = $l;
		$g = $l;
		$b = $l;
	} else {
		$q = $l < 0.5 ? $l * ( 1 + $s ) : $l + $s - $l * $s;
		$p = 2 * $l - $q;
		$r = gutenberg_tinycolor_hue_to_rgb( $p, $q, $h + 1 / 3 );
		$g = gutenberg_tinycolor_hue_to_rgb( $p, $q, $h );
		$b = gutenberg_tinycolor_hue_to_rgb( $p, $q, $h - 1 / 3 );
	}

	return array(
		'r' => $r * 255,
		'g' => $g * 255,
		'b' => $b * 255,
	);
}

/**
 * Parses hex, hsl, and rgb CSS strings using the same regex as tinycolor v1.4.2
 * used in the JavaScript. Only colors output from react-color are implemented.
 *
 * @see https://github.com/bgrins/TinyColor
 * @see https://github.com/casesandberg/react-color/
 *
 * @deprecated 6.3.0
 *
 * @param  string $color_str CSS color string.
 * @return array             RGB object.
 */
function gutenberg_tinycolor_string_to_rgb( $color_str ) {
	_deprecated_function( __FUNCTION__, '6.3.0' );

	$color_str = strtolower( trim( $color_str ) );

	$css_integer = '[-\\+]?\\d+%?';
	$css_number  = '[-\\+]?\\d*\\.\\d+%?';

	$css_unit = '(?:' . $css_number . ')|(?:' . $css_integer . ')';

	$permissive_match3 = '[\\s|\\(]+(' . $css_unit . ')[,|\\s]+(' . $css_unit . ')[,|\\s]+(' . $css_unit . ')\\s*\\)?';
	$permissive_match4 = '[\\s|\\(]+(' . $css_unit . ')[,|\\s]+(' . $css_unit . ')[,|\\s]+(' . $css_unit . ')[,|\\s]+(' . $css_unit . ')\\s*\\)?';

	$rgb_regexp = '/^rgb' . $permissive_match3 . '$/';
	if ( preg_match( $rgb_regexp, $color_str, $match ) ) {
		$rgb = gutenberg_tinycolor_rgb_to_rgb(
			array(
				'r' => $match[1],
				'g' => $match[2],
				'b' => $match[3],
			)
		);

		$rgb['a'] = 1;

		return $rgb;
	}

	$rgba_regexp = '/^rgba' . $permissive_match4 . '$/';
	if ( preg_match( $rgba_regexp, $color_str, $match ) ) {
		$rgb = gutenberg_tinycolor_rgb_to_rgb(
			array(
				'r' => $match[1],
				'g' => $match[2],
				'b' => $match[3],
			)
		);

		$rgb['a'] = gutenberg_tinycolor_bound_alpha( $match[4] );

		return $rgb;
	}

	$hsl_regexp = '/^hsl' . $permissive_match3 . '$/';
	if ( preg_match( $hsl_regexp, $color_str, $match ) ) {
		$rgb = gutenberg_tinycolor_hsl_to_rgb(
			array(
				'h' => $match[1],
				's' => $match[2],
				'l' => $match[3],
			)
		);

		$rgb['a'] = 1;

		return $rgb;
	}

	$hsla_regexp = '/^hsla' . $permissive_match4 . '$/';
	if ( preg_match( $hsla_regexp, $color_str, $match ) ) {
		$rgb = gutenberg_tinycolor_hsl_to_rgb(
			array(
				'h' => $match[1],
				's' => $match[2],
				'l' => $match[3],
			)
		);

		$rgb['a'] = gutenberg_tinycolor_bound_alpha( $match[4] );

		return $rgb;
	}

	$hex8_regexp = '/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/';
	if ( preg_match( $hex8_regexp, $color_str, $match ) ) {
		$rgb = gutenberg_tinycolor_rgb_to_rgb(
			array(
				'r' => base_convert( $match[1], 16, 10 ),
				'g' => base_convert( $match[2], 16, 10 ),
				'b' => base_convert( $match[3], 16, 10 ),
			)
		);

		$rgb['a'] = gutenberg_tinycolor_bound_alpha(
			base_convert( $match[4], 16, 10 ) / 255
		);

		return $rgb;
	}

	$hex6_regexp = '/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/';
	if ( preg_match( $hex6_regexp, $color_str, $match ) ) {
		$rgb = gutenberg_tinycolor_rgb_to_rgb(
			array(
				'r' => base_convert( $match[1], 16, 10 ),
				'g' => base_convert( $match[2], 16, 10 ),
				'b' => base_convert( $match[3], 16, 10 ),
			)
		);

		$rgb['a'] = 1;

		return $rgb;
	}

	$hex4_regexp = '/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/';
	if ( preg_match( $hex4_regexp, $color_str, $match ) ) {
		$rgb = gutenberg_tinycolor_rgb_to_rgb(
			array(
				'r' => base_convert( $match[1] . $match[1], 16, 10 ),
				'g' => base_convert( $match[2] . $match[2], 16, 10 ),
				'b' => base_convert( $match[3] . $match[3], 16, 10 ),
			)
		);

		$rgb['a'] = gutenberg_tinycolor_bound_alpha(
			base_convert( $match[4] . $match[4], 16, 10 ) / 255
		);

		return $rgb;
	}

	$hex3_regexp = '/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/';
	if ( preg_match( $hex3_regexp, $color_str, $match ) ) {
		$rgb = gutenberg_tinycolor_rgb_to_rgb(
			array(
				'r' => base_convert( $match[1] . $match[1], 16, 10 ),
				'g' => base_convert( $match[2] . $match[2], 16, 10 ),
				'b' => base_convert( $match[3] . $match[3], 16, 10 ),
			)
		);

		$rgb['a'] = 1;

		return $rgb;
	}

	// The JS color picker considers the string "transparent" to be a hex value,
	// so we need to handle it here as a special case.
	if ( 'transparent' === $color_str ) {
		return array(
			'r' => 0,
			'g' => 0,
			'b' => 0,
			'a' => 0,
		);
	}
}

/**
 * Returns the prefixed id for the duotone filter for use as a CSS id.
 *
 * @deprecated 6.3.0
 *
 * @param  array $preset Duotone preset value as seen in theme.json.
 * @return string        Duotone filter CSS id.
 */
function gutenberg_get_duotone_filter_id( $preset ) {
	_deprecated_function( __FUNCTION__, '6.3.0' );
	return WP_Duotone_Gutenberg::get_filter_id_from_preset( $preset );
}

/**
 * Returns the CSS filter property url to reference the rendered SVG.
 *
 * @deprecated 6.3.0
 *
 * @param  array $preset Duotone preset value as seen in theme.json.
 * @return string        Duotone CSS filter property url value.
 */
function gutenberg_get_duotone_filter_property( $preset ) {
	_deprecated_function( __FUNCTION__, '6.3.0' );
	return WP_Duotone_Gutenberg::get_filter_css_property_value_from_preset( $preset );
}

/**
 * Returns the duotone filter SVG string for the preset.
 *
 * @deprecated 6.3.0
 *
 * @param  array $preset Duotone preset value as seen in theme.json.
 * @return string        Duotone SVG filter.
 */
function gutenberg_get_duotone_filter_svg( $preset ) {
	_deprecated_function( __FUNCTION__, '6.3.0' );
	return WP_Duotone_Gutenberg::get_filter_svg_from_preset( $preset );
}
