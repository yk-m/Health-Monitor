<?php
/* Smarty version 3.1.29, created on 2016-02-13 01:50:34
  from "/var/www/health/application/views/templates/common/header.tpl" */

if ($_smarty_tpl->smarty->ext->_validateCompiled->decodeProperties($_smarty_tpl, array (
  'has_nocache_code' => false,
  'version' => '3.1.29',
  'unifunc' => 'content_56be0d5a5641f8_17551791',
  'file_dependency' => 
  array (
    '79f87364ff3644bbaee37fd89335184154469954' => 
    array (
      0 => '/var/www/health/application/views/templates/common/header.tpl',
      1 => 1455290315,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_56be0d5a5641f8_17551791 ($_smarty_tpl) {
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title><?php echo $_smarty_tpl->tpl_vars['page_title']->value;?>
 | Health monitor</title>
	<link rel="stylesheet" href="stylesheets/<?php echo $_smarty_tpl->tpl_vars['css_filename']->value;?>
.css">
	<link type="text/css" rel="stylesheet" href="http://code.jquery.com/ui/1.11.4/themes/cupertino/jquery-ui.min.css" />
	<?php echo '<script'; ?>
 type="text/javascript" src="http://code.jquery.com/jquery-1.12.0.min.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 type="text/javascript" src="http://code.jquery.com/ui/1.11.4/jquery-ui.min.js"><?php echo '</script'; ?>
>
	<?php echo $_smarty_tpl->tpl_vars['js_include']->value;?>

</head><?php }
}
