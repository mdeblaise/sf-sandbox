<?php

namespace MMC\AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class AdminBundleController extends Controller
{
    public function indexAction()
    {
        return $this->render('MMCAdminBundle::index.html.twig');
    }

}
