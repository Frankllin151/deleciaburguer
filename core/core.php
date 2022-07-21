<?php
class Core
{
  public function run()
  {
    $url = '/';
    if (isset($_GET['url'])) {
      $url .= $_GET['url'];
    }
    $params = array();
    if (!empty($url) && $url != '/') {
      $url = explode('/', $url);
      array_shift($url);

      $currentcontroller = $url[0] . 'controller';
      array_shift($url);
      if (isset($url[0]) && !empty($url[0])) {
        $currentAction = $url[0];
        array_shift($url);
      } else {
        $currentAction = 'index';
      }
      if (count($url) > 0) {
        $params  = $url;
      }
    } else {
      $currentcontroller = 'homecontroller';
      $currentAction = 'index';
    }
    // c = controller 
    $c = new $currentcontroller(); // qualquer acess in the of $currentcontroller can user here
    call_user_func_array(array($c, $currentAction), $params);
  }
}
