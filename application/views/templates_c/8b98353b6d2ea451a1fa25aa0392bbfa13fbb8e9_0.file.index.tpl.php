<?php
/* Smarty version 3.1.29, created on 2016-02-24 13:33:42
  from "/var/www/health/application/views/templates/index.tpl" */

if ($_smarty_tpl->smarty->ext->_validateCompiled->decodeProperties($_smarty_tpl, array (
  'has_nocache_code' => false,
  'version' => '3.1.29',
  'unifunc' => 'content_56cd32a6c67737_21696403',
  'file_dependency' => 
  array (
    '8b98353b6d2ea451a1fa25aa0392bbfa13fbb8e9' => 
    array (
      0 => '/var/www/health/application/views/templates/index.tpl',
      1 => 1456288421,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:common/header.tpl' => 1,
  ),
),false)) {
function content_56cd32a6c67737_21696403 ($_smarty_tpl) {
$_smarty_tpl->smarty->ext->_subtemplate->render($_smarty_tpl, "file:common/header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>


<body>
	<section class="index">
		<h1>Health monitor</h1>
		<div class="forms">
			<section class="login">
				<p>Don't have an account? <a href="javaScript:void(0)" class="switch">Sign up</a></p>
				<form method="post" accept-charset="utf-8">
					<p class='id-error'></p>
					<input type="text" name="id" value="" placeholder="User ID">
					<p class='password-error'></p>
					<input type="password" name="password" value="" placeholder="Password">
					<input type="button" name="" value="Let me in.">
					<span class="loading"><span>loading...</span></span>
				</form>
			</section>
			<section class="register">
				<p>Already have an account? <a href="javaScript:void(0)" class="switch">Login</a></p>
				<form method="post" accept-charset="utf-8">
					<section class="horizontal-form name">
						<input type="text" name="first" value="" placeholder="First"><input type="text" name="last" value="" placeholder="Last">
					</section>
					<p class='id-error'></p>
					<input type="text" name="id" value="" placeholder="User ID">
					<p class='password-error'></p>
					<input type="password" name="password" value="" placeholder="Password">
					<input type="button" name="" value="Sign up.">
				</form>
			</section>
		</div>
	</section>
</body><?php }
}
