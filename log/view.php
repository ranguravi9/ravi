<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/*
    @var $this yii\web\View */
// @var $model app\models\Log
?>

<div class="page-content col-md-12 ">
   
    <?php echo DetailView::widget(
        [
            'model' => $model,
            'attributes' => [
          // 'id',
                'level',
                'category',
          // 'log_time',
                'prefix',
                'message:ntext',
            ],
        ]
    ) ?>

</div>
