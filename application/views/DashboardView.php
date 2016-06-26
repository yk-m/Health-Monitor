<?php namespace Views;

class DashboardView {

	private $smarty = null;

	function __construct() {
		$this->smarty = \SmartyFactory::generate();
		$this->smarty->assign( 'css_filename', 'dashboard' );
	}

	public function dashboard() {
		$this->smarty->assign( 'page_title', 'Dashboard' );
		$this->smarty->assign( 'js_include', '
			<script type="text/javascript" src="js/Confirmer.js"></script>
			<script type="text/javascript" src="js/dashboard/date.format.js"></script>
			<script type="text/javascript" src="js/dashboard/chart/Chart.min.js"></script>
			<script type="text/javascript" src="js/dashboard/chart/Chart.Scatter.js"></script>
			<script type="text/javascript" src="js/dashboard/Graph.js"></script>
			<script type="text/javascript" src="js/dashboard/Calendar.js"></script>
			<script type="text/javascript" src="js/dashboard/Weight.js"></script>
			<script type="text/javascript" src="js/dashboard/Modal.js"></script>
			<script type="text/javascript" src="js/dashboard/Dashboard.js"></script>
			<script type="text/javascript" src="js/dashboard/init.js"></script>
		' );
		$this->smarty->display( 'dashboard.tpl' );
	}
}