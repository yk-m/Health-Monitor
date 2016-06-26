<?php
/* Smarty version 3.1.29, created on 2016-02-24 11:55:53
  from "/var/www/health/application/views/templates/dashboard.tpl" */

if ($_smarty_tpl->smarty->ext->_validateCompiled->decodeProperties($_smarty_tpl, array (
  'has_nocache_code' => false,
  'version' => '3.1.29',
  'unifunc' => 'content_56cd1bb9b4b675_14412422',
  'file_dependency' => 
  array (
    'ec9dca900bc75cae154f064d248e9d01b8e2983d' => 
    array (
      0 => '/var/www/health/application/views/templates/dashboard.tpl',
      1 => 1456282520,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:common/header.tpl' => 1,
  ),
),false)) {
function content_56cd1bb9b4b675_14412422 ($_smarty_tpl) {
$_smarty_tpl->smarty->ext->_subtemplate->render($_smarty_tpl, "file:common/header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>


<body>
	<header>
		<h1>Health monitor</h1>
		<a href="/logout" class="logout"><span>logout</span></a>
	</header>
	<div class="wrapper">

		<section class="calendar">
			<div class="controller">
				<ul>
					<li class="prev"><a href="javaScript:void(0)" title="Prev"></a></li>
					<li class="next"><a href="javaScript:void(0)" title="Next"></a></li>
				</ul>
			</div>
		</section>

		<section class="graph_month">
			<h1>Weight</h1>
			<canvas id="weight"></canvas>
		</section>

	</div>

	<div class="modal-background"></div>
	<section class="modal" id="input_area">
		<div class="modal-content">
			<h1>February 2, 2016</h1>
			<div class="modal-body">
				<form method="post" accept-charset="utf-8">
					<p class="error" style="display: hide"></p>
					<div class="horizontal-form">
						<input type="text" name="weight" value="" placeholder="Weight"><span>kg</span><input type="button" name="add" value="Add"><input type="button" name="delete" value="Del">
					</div>
				</form>
				<button class="modal-close"><span>Close</span></button>
			</div>
		</div>
	</section>

</body>
</html><?php }
}
