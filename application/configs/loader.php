<?php

session_save_path( C_PATH_ROOT. 'data/sessions' );

require_once C_PATH_ROOT .    'vendor/autoload.php';

require_once C_PATH_PROGRAM . 'Application.php';
require_once C_PATH_PROGRAM . 'configs/Exceptions.php';
require_once C_PATH_PROGRAM . 'configs/smarty.php';

require_once C_PATH_PROGRAM . 'controllers/AuthController.php';
require_once C_PATH_PROGRAM . 'controllers/ErrorController.php';
require_once C_PATH_PROGRAM . 'controllers/IndexController.php';
require_once C_PATH_PROGRAM . 'controllers/AjaxRequestController.php';
require_once C_PATH_PROGRAM . 'controllers/AjaxWeightRequestController.php';
require_once C_PATH_PROGRAM . 'controllers/DashboardController.php';

require_once C_PATH_PROGRAM . 'models/Database.php';
require_once C_PATH_PROGRAM . 'models/Login.php';
require_once C_PATH_PROGRAM . 'models/Register.php';
require_once C_PATH_PROGRAM . 'models/Weight.php';
require_once C_PATH_PROGRAM . 'models/User.php';

require_once C_PATH_PROGRAM . 'views/IndexView.php';
require_once C_PATH_PROGRAM . 'views/DashboardView.php';