<?php
class controller
{
  public function loadView($viewName, $Dataview = array())
  {
    extract($Dataview); // extract: transform array in variable 
    require 'views/' . $viewName . '.php';
  }
  // LoadTemplate = header  of site 
  public function LoadTemplate($viewName, $Dataview = array())
  {
    require 'views/template.php';
  }
  public function LoadViewinTemplate($viewName, $Dataview = array())
  {
    extract($Dataview);
    require 'views/' . $viewName . '.php';
  }
}
