{include file='common/header.tpl'}

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
</html>