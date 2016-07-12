<?php

namespace MMC\AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('MMCAdminBundle:Default:index.html.twig');
    }

}
