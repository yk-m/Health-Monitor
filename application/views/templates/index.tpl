{include file='common/header.tpl'}

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
</body>