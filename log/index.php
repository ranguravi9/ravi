<?php

use yii\helpers\Html;
use yii\grid\GridView;
use yii\widgets\Pjax;
/*
    @var $this yii\web\View */
// @var $dataProvider yii\data\ActiveDataProvider
$this->title = 'Logs';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="col-md-12">




<div class="row dashboard-container">

          <!--  For Bread Crumb-->
                    <div class="blue-breadcrumb col-md-12 padding-0">
                <a class="breadcrumb-back-btn" href="<?php echo Yii::$app->getUrlManager()->getBaseUrl().Yii::$app->params['dashboard_url']; ?>">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
                </a>
                <div class="breadcrumb-description">
                    <span class="">Master Data &#62; Error Log </span>

                </div>

            </div>
      <!-- End For Bread Crumb-->
    </div>
    <?php echo $this->render('../masterdata/header-links.php'); ?>
    <div class="col-md-12">

<div class="container">
<div class="page-content col-md-12">
   
    <?php Pjax::begin(); ?>

    <p>
        <?php echo Html::button('Purge/Clear ALL', ['class' => 'btn btn-danger pull-right', 'onclick' => 'clearErrorMessage();']) ?>
    </p>
<?php

$gridColumns = [
    [
        'class' => 'yii\grid\SerialColumn',
        'headerOptions' => ['class' => 'blue-grid-head']
    ],
    [
        'attribute' => 'category',
        'headerOptions' => ['class' => 'blue-grid-head'],
        'value' => function ($model, $key, $index, $widget) {
                    $status = '<a class="color-blue"><u>'.$model->category.'</u></a>';
                    return $status;

        },
        'filter' => false,
        'format' => 'raw'
    ],
    [
        'attribute' => 'log_time',
        'headerOptions' => ['class' => 'blue-grid-head'],
        'value' => function ($model, $key, $index, $widget) {
                                    return date('Y-m-d h:i:s', $model->log_time);

        },
        'filter' => false,
        'format' => 'raw'
    ],

];
?>
    <?php echo GridView::widget(
        [
            'dataProvider' => $dataProvider,
            'rowOptions' => function ($model, $index, $widget, $grid) {
                return [
                    'onclick' => 'showErrorMessage('.$model->id.');',
                    'class' => 'cursor-pointer'
                ];
            },
            'columns' => $gridColumns
            /*
                [
                ['class' => 'yii\grid\SerialColumn'],

                //  'id',
                //   'level',
                'category',
                'log_time',
                //  'prefix',
                // 'message:ntext',

                ['class' => 'yii\grid\ActionColumn'],
        ]*/,
        ]
    ); ?>
    <?php Pjax::end(); ?>
</div>
</div>
</div>
</div>


                
                
                
            <div class="modal fade" id="error_message" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header modal-header-color">
     <button type="button" class="close-modal modal-opacity close-modal-blue" data-dismiss="modal" aria-hidden="true">
                                X
                            </button>
        <h4 class="modal-title color-white" id="myModalLabel">Error Details</h4>
      </div>
      <div class="modal-body">
        <div class="panel panel-default">
          <div class="panel-body padding-0" id="error_message_details">
            
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>
                
                <script>
    
    $(document).ready(function(){
        $('#masterdata_link').addClass('page-active');
    });

                function showErrorMessage(id){
                    $.ajax({
                        url:  '/log/view?id='+id,
                         type: 'get',
                         //data: 'id='+id,
                         success:function(html){
                             $("#error_message_details").html(html);
                             $("#error_message").modal('show');
                         }
                    });
                }
                
                function clearErrorMessage(){
                    $.ajax({
                        url:  '/log/delete',
                         type: 'post',
                         success:function(html){
                             location.reload();
                         }
                    });
                }
                </script>