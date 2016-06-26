<?php

class SmartyFactory {
	const TEMPLATE_DIR = C_PATH_PROGRAM . "views/templates/"
	    , COMPILE_DIR  = C_PATH_PROGRAM . "views/templates_c/"
	    , CONFIG_DIR   = C_PATH_PROGRAM . "configs/smarty/"
	    , CACHE_DIR    = C_PATH_ROOT    . "data/cache/smarty/"
	;

	public static function generate() {
		$smarty = new Smarty();

		$smarty->template_dir = self::TEMPLATE_DIR;
		$smarty->compile_dir  = self::COMPILE_DIR;
		$smarty->config_dir   = self::CONFIG_DIR;
		$smarty->cache_dir    = self::CACHE_DIR;

		return $smarty;
	}
}
