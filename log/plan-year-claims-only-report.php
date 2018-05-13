<?php
use yii\helpers\Html;
use app\components\ReportFunctionComponent;

    // $monthsArray = array_keys ( $dataArray ['claim_specific'] );
                // get 1st element of array
            // $FirstElement = reset ( $dataArray ['claim_specific'] );
            // $columnHead = array_keys ( $FirstElement );
            // print_r($FirstElement);die();
?>

<?php if (!empty($is_render)) {?>
<div class="modal-header modal-header-color col-md-12"
    style="position: fixed; z-index: 1000;">

    <h4 class="modal-title color-white col-md-5 padding-0">Plan Year Claims
        Only Report</h4>

    <span class="modal-title color-white col-md-3 padding-5"> <span
        class="pdf-download"
        onclick="downloadPlanYearClaimReport('download');"
        id="download_plan_year_claim_report" style="cursor: pointer;"> <i
            class="fa fa-file-pdf-o padding-5" style="font-size: 12px;"></i> <span
            class="padding-10">Download Pdf</span> <i
            class="fa fa-download padding-5 download-icon"></i>
    </span>
    </span> <span
        class="modal-title color-white col-md-1 padding-5 padding-left-0 pull-right"
        id="print_btn"> <i class="fa fa-print padding-5 padding-left-0"
        style="font-size: 24px; cursor: pointer;" title="Print Report"
        onclick="downloadPlanYearClaimReport('plan_year_claims_only_report_pdf_print_iframe');"></i>


    </span>

</div>


<div class="col-md-12 margin-top-50 margin-bottom-10">
    <div class="container padding-15"
        style="background-color: #fff; color: black;overflow-y: hidden;">
 
<?php }//end if
    ?>
 
<div id="plan_year_claims_only_report_pdf_print_iframe"
            style="display: none;"></div>

        <!--<iframe id="plan_year_claims_only_report_pdf_print_iframe" style="display:none;"
        src="<?php
        // echo Yii::$app->getUrlManager()->getBaseUrl(); ?>/web/pdf_reports/<?php
// echo $_GET['plan_id'];?>/<?php
// echo $_GET['plan_year_id'];?>/<?php
// echo Html::encode( ucfirst($dataArray['reportName'])); ?>.pdf"></iframe> -->

        <div id="plan_year_claims_only_report_print" style="color: black;width:100%;margin: 0 auto">

            <table style="page-break-inside: avoid;margin: 0px auto;">
                <tbody>
                    <tr>
                        <td>
                <?php echo $this->render('_header', ['dataArray' => $dataArray, 'claim_name' => $dataArray['planName']])?>

                            <table class="col-md-12">
                                <tbody>
                                    <tr class="col-md-12 padding-bottom-15">
                                        <td class="col-md-12 padding-0" style="display: block;">
                                            <table class="col-md-12 padding-0">
                                                <tbody>
<!--                                                     <tr class="col-md-12 padding-0" > 
                                                        <td><b class="fontsize-14"><?php
                                                        // echo $dataArray['planYearTitle']; ?></b></td>
                                                    </tr> -->
                                                    <tr class="col-md-12 padding-0 report-header-back" >
                                                        <td><b class="fontsize-14"><?php echo $dataArray['planYearTitle'].' - '; ?>Total Paid Plan Claims By Month</b></td>
                                                    </tr>
                                                    
                                                    <tr>
                <?php
                if (! empty($is_pdf)) {
                    $charts_count = 0;
                    if (! empty($deodedJsonCharts[0])) {
                        ?>
                   <td style="display: block"><img src="<?php echo $deodedJsonCharts[0];?>"></td>
                            
                    <?php }

                    if (!empty($deodedJsonCharts[1])) { ?>
                 <td style="display: block"><img src="<?php echo $deodedJsonCharts[1];?>"></td>                
                                
                    <?php	}
                } else { ?>
                <td class="col-md-12 padding-0 ">
                                                            <table class="col-md-12 padding-0">
                                                                <tbody>
                          <tr>
                           <td class="col-md-6 padding-left-0 plan-claims-charts-main-div">
                <div class="col-md-12  padding-10">
                 <div class="widget-header"></div>
                 <div>
                  <div id="paid_plan_claims"
                   style="min-width: 300px; height: 300px; margin: 0 auto"></div>

                 </div>
                </div>
                           </td>

                           <td class="col-md-6 padding-right-0 plan-claims-charts-main-div">
                <div class="col-md-12 padding-10">
                 <div class="widget-header"></div>
                 <div>
                  <div id="paid_plan_claims_area"
                   style="min-width: 300px; height: 300px; margin: 0 auto"></div>

                 </div>
                </div>
                           </td>
                          </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                
                <?php }//end if
    ?>
            
                                    
                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
<!------------------------------------------------------------------------------------------->
<table class="col-sm-12">
                                <tbody>
                                    <tr class="margin-right-10 font-15 margin-bottom-5" style="display: block;">
                                        <td><u><b class="fontsize-14">Average Net Claims Per Month</b></u></td>
                                    </tr>
                                    <tr>
                                        <td class="col-md-6 padding-0" style="display: block;">
                                            <table class="width-100 reports-table " cellspacing="0"
                                                    style="border-collapse: separate; border-spacing: 2px 0;">
                                                <thead class="">                                                    
                                                    <tr class="">
                                                        <th class="text-align-center  padding-6 "></th>
                                                        <td class=" text-align-center padding-6 "></td> 
                                                        <td class=" text-align-center padding-6 "><b><u>% of Total</u></b></td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                <?php
                $avgTotal = 0;

                if (! empty($avgClaimPerMonthArray)) {
                    $avgTotal   = array_sum(array_values($avgClaimPerMonthArray));
                    $percentage = 0;
                    foreach ($avgClaimPerMonthArray as $claimName => $value) {
                        ?>
                   <tr class="" style="background-color: transparent;">
                          <td class="text-align-left padding-6 border-bottom1"><?php if ($claimName == 'Hra Claims' || $claimName == 'Hsa Claims') {
                                echo 'Average Monthly '.strtoupper($claimName);
                         } else {
    echo 'Average Monthly '.$claimName;
} ?></td>
                                                                        <td class="text-align-center padding-6 border-bottom1">$<?php echo Yii::$app->formatter->asInteger(round($value, 0)); ?></td>
                                                                        <td class="text-align-center padding-6 border-bottom1"><?php $per = round(($value / $avgTotal * 100), 2);
                                                                        echo $avgTotal > 0 ? round(($value / $avgTotal * 100), 2) : 0.0; $percentage = ($per + $percentage)?> %</td>

                                                                       </tr>
                                
                    <?php
                    }
                }//end if
                                ?>
                                                    <tr style="background-color: white;">
                                                                        <td class="text-align-left padding-3"><b><u>Average Monthly Total Net Claims</u></b></td>
                                                                        <td class="text-align-center  padding-6 " style="background:#efefef;"><b><u>$<?php echo Yii::$app->formatter->asInteger(round($avgTotal, 0)); ?></u></b></td>
                                                                        <td class="text-align-center  padding-6 " style="background:#efefef;"><b><u><?php echo $percentage;?>%</u></b></td>

                                                                    </tr>
                                             
                                                    <!--<tr>
                                                        <td class="padding-6  border-bottom1">Average Monthly HSA Claims</td>
                                                        <td class="text-align-center  padding-6  border-bottom1">N/A</td>
                                                        <td class="text-align-center  padding-6  border-bottom1">0.0%</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="padding-6 "><b><u>Average Monthly Total Net Claims</u></b></td>
                                                        <td class="text-align-center  padding-6 " style="background:#efefef;"><b><u>$842,852</u></b></td>
                                                        <td class="text-align-center  padding-6 " style="background:#efefef;"><b><u>100%</u></b></td>
                                                    </tr>-->
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

<!---------------------------------------------------------------------------------------------->
                            <!--<table class="col-md-12">
                                <tbody>
                                    <tr class="col-md-12 padding-bottom-15">
                                        <td class="col-md-6 padding-left-0" style="vertical-align:top;">
                                            <table class="col-md-12 padding-0">
                                                <tbody>
                                                    <tr class="col-md-12">
                                                        <td class="report-header-back" style="text-align:center;width: 100%;display: block;"><b class="fontsize-14">Average Claims per Month</b></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table class="col-md-12 padding-0">
                                                <tbody>
                                                    <tr class="col-md-12 ">
                                                        <td class="col-md-12 padding-2 black-border"
                                                            style="display: block;">
                                                            <table style="width: 100%" class="reports-summary-table black-border">
                                                                <tbody class="text-align-center">
                            
                                <?php
                                $avgTotal = 0;

                                if (! empty($avgClaimPerMonthArray)) {
                                    $avgTotal = array_sum(array_values($avgClaimPerMonthArray));
                                    foreach ($avgClaimPerMonthArray as $claimName => $value) {
                                        ?>
                                   <tr class="" style="background-color: transparent;">
                                                                        <td class="text-align-left padding-3"><?php echo 'Av. '.$claimName.' / Mo'; ?></td>
                                                                        <td class="text-align-center padding-3"><?php echo Yii::$app->formatter->asDecimal($value); ?></td>
                                                                        <td class="text-align-center padding-3"><?php echo $avgTotal > 0 ? round(($value / $avgTotal * 100), 2) : 0; ?> %</td>

                                                                    </tr>
                                
                                    <?php
                                    }
                                }
                                ?>
                                
                                <tr style="background-color: white;">
                                                                        <td class="text-align-left padding-3"><b><u>Total</u></b></td>
                                                                        <td class="text-align-center padding-3"><u><?php echo Yii::$app->formatter->asDecimal($avgTotal); ?></u></td>
                                                                        <td class="text-align-center padding-3"></td>

                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>

                                        <td class="col-md-6"></td>-->
                                        <!--<td class="col-md-5 padding-right-0" style="vertical-align:top;">
                                            <table class="col-md-12 padding-0">
                                                <tbody>
                                                    <tr class="col-md-12" align="center">
                                                        <td class="report-header-back" style="text-align:center;width: 100%;display: block;"><b class="fontsize-14">Fixed / Variable Cost Allocation</b></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table class="col-md-12 padding-0">
                                                <tbody>
                                                    <tr class="col-md-12">
                                                        <td class="col-md-12  padding-2 black-border"
                                                            style="display: block;">

                                                            <table style="width: 100%" class="reports-summary-table black-border">
                                                                <thead class="">

                                                                    <tr>

                                                                        <th class="text-align-center padding-3"></th>
                                                                        <th class="text-align-center padding-3"></th>
                                                                        <th class="text-align-center padding-3">Actual Average
                                                                            / Month</th>
                                                                        <th class="text-align-center padding-3">% Over / Under</th>

                                                                    </tr>
                                                                </thead>

                                                                <tbody class="text-align-center">
                                                                    <tr class="" style="background-color: transparent;">
                                                                        <td class="text-align-left padding-3">Expected
                                                                            Claims</td>
                                                                        <td class="text-align-center padding-3"><?php
                                                                        /*
                                                                            $expectedClaims = array_sum ( $expectedMonthlyArray );
                                                                        echo Yii::$app->formatter->asInteger ( $expectedClaims );*/
                    ?></td>
                                                                        <td class="text-align-center padding-3"><?php
                                                                        // echo Yii::$app->formatter->asDecimal($avgTotal); ?></td>
                                                                        <td class="text-align-center padding-3"><?php
                                                                        // echo $expectedClaims > 0 ? round($avgTotal / $expectedClaims * 100,2) : 0; ?> %</td>

                                                                    </tr>
                                                                    <tr class="" style="background-color: transparent;">
                                                                        <td class="text-align-left padding-3">Maximum Claims</td>
                                                                        <td class="text-align-center padding-3"><?php
                                                                        /*
                                                                            $maximumClaims = array_sum ( $maximumMonthlyArray );
                                                                        echo Yii::$app->formatter->asInteger ( $maximumClaims );*/
                    ?></td>
                                                                        <td class="text-align-center padding-3"><?php
                                                                        // echo Yii::$app->formatter->asDecimal($avgTotal); ?></td>
                                                                        <td class="text-align-center padding-3"><?php
                                                                        // echo $maximumClaims > 0 ? round($avgTotal / $maximumClaims * 100,2) : 0; ?> %</td>

                                                                    </tr>


                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>-->
                                    <!--    <td class="2"></td>
                                    </tr>
                                </tbody>
                            </table>--> <!-- <div class="html2pdf__page-break" style="page-break-after: always;"></div> -->
    
    <table class="col-md-12">
                                <tbody class="col-md-12 padding-bottom-15 margin-top-10"
                                    id="claim_trend">
                                    <tr class="margin-right-10 font-15 margin-bottom-5" style="display: block;">
                                        <td><u><b class="fontsize-14">Report Details</b></u></td>
                                    </tr>
                                    <tr class="col-md-12  padding-0 ">
                                        <td class="col-md-12 padding-0" style="display: block;">
                <?php

                $monthsArray = array_keys($dataArray['month_specific']);
                // get 1st element of array
                $FirstElement = reset($dataArray['month_specific']);
                $columnHead   = array_keys($FirstElement);

                ?>
                <table class="width-100 reports-table " cellspacing="0"
                                                style="border-collapse: separate; border-spacing: 2px 0;">
                                                <thead class="">

                                                    <tr class="">
                                                        <th class="text-align-center  padding-6 "></th>
                                    
                                    
            <?php
            $width = (100 / (count($dataArray['reports_description']) + 1));
            if (! empty($dataArray['reports_description'])) {
                foreach ($dataArray['reports_description'] as $key => $value) {
                    ?>
               <td class=" text-align-center padding-6 " style="width:<?php echo $width;?>%;"><b><u><?php echo $key; ?></u></b></td> 
                <?php }
            } ?>
                            
                                    </tr>

                                                    <tr class="report-header-back">
                                                        <td class="text-align-center " style="padding:8px;"><b><u>Month</u></b></td>
                                
                                <?php

                                if (! empty($columnHead)) {
                                    foreach ($columnHead as $headName) {
                                        ?>
                                   <td <?php if (strpos($headName, 'NULL_') !== false) {
                        ?>  <?php
                                  } ?>
                                                            class="text-align-center padding-6 <?php if ($headName == 'total_monthly_net_claims' || $headName == 'expected_monthly_claims' || $headName == 'maximum_monthly_claims') {
?> black-border margin-10<?php
                                                           }?>">
                                                        <b>    <u>
                <?php
                if (strpos($headName, 'NULL_') !== false) {
                    echo '';
                } else {
                    if ($headName == 'total_monthly_net_claims' || $headName == 'expected_monthly_claims' || $headName == 'maximum_monthly_claims') {
                        echo ucwords(str_replace('_', ' ', $headName));
                    } else {
                        echo 'Net '.ucwords(str_replace('_', ' ', $headName));
                    }
                }

                                        ?></u></b>
                                         </td> 
                                
                                    <?php }//end foreach
                                }//end if
    ?>
                                
                                
                              </tr>
                                                </thead>
                                                <tbody class="text-align-center">
                
                 
        <?php
        $sumArray    = [];
        $count_check = 1;
        $count_month = count($monthsArray);
        foreach ($monthsArray as $month) {
            ?>
          <tr class="">

                                                        <td class="no-wrap text-align-center border-bottom1"><?php echo $month; ?></td>
                            
            <?php

            if (! empty($columnHead)) {
                foreach ($columnHead as $headName) {
                    if (! isset($sumArray[$headName])) {
                        $sumArray[$headName] = 0;
                    }

                    $sumArray[$headName] += $dataArray['month_specific'][$month][$headName];
                    ?> 
                 <td <?php if (!isset($dataArray['month_specific'][$month][$headName]) || $dataArray['month_specific'][$month][$headName] == '') {
        ?> style="background:#efefef;" <?php
                }?>
                                                            class=" text-align-center padding-6 border-bottom1<?php if ($headName == 'total_monthly_net_claims' || $headName == 'expected_monthly_claims' || $headName == 'maximum_monthly_claims') {
?> <?php if ($count_month == $count_check) {
?>side-border-black reports-border-bottom-one<?php
} else {
?>  side-border-black <?php
} ?> margin-10<?php
                                                           }?>"><?php echo  isset($dataArray['month_specific'][$month][$headName]) && strlen($dataArray['month_specific'][$month][$headName]) > 0 ? '$'.Yii::$app->formatter->asInteger($dataArray['month_specific'][$month][$headName]) : ''; ?></td>
                            
                                
                            
                <?php }//end foreach
            }//end if
    ?>
                            
          </tr>
        <?php $count_check++;
        }//end foreach
    ?>     
                    <tr>
                                                        <td class="text-align-center padding-6"><b><u>Total</u></b></td>
        <?php

        if (! empty($columnHead)) {
            foreach ($columnHead as $headName) {
                ?>
           <td style="background:#efefef;"
                                                            class="text-align-center padding-6 <?php if ($headName == 'total_monthly_net_claims' || $headName == 'expected_monthly_claims' || $headName == 'maximum_monthly_claims') {
?> margin-10<?php
                                                           }?>"><b><u><?php echo !empty($sumArray[$headName]) ? '$'.Yii::$app->formatter->asInteger($sumArray[$headName]) : ''; ?></u></b></td>
                    
            <?php }
        } ?>
                    </tr>
                                                </tbody>
                                            </table>

                                        </td>
                                    </tr>
                                </tbody>


                            </table>
    <?php if (!empty($dataArray['reports_description'])) {?>
             <table class="">

                                <tbody class="col-md-12 padding-bottom-15">
                                    <tr class="box-head-claim font-15 margin-left-0">
                                        <td style="text-align: left; background: #f0e8c4;"><b class="font-12"><u>Legend</u></b></td>
                                    </tr>
                                    <tr
                                        class="">
                                        <td class="col-md-12  padding-10 padding-bottom-15 black-border">
                        <!--    Column <?php
                        // echo ReportFunctionComponent::SearchKeysArray($dataArray['reports_description'], 'GROSS_CLAIMS'); ?> is gross claims by month.  Colums <?php echo ReportFunctionComponent::SearchKeysArray($dataArray['reports_description'], 'ADJUST_GROSS_CLAIMS'); ?> are used to adjust gross claims by any reimbursements to the plan.  Column <?php echo ReportFunctionComponent::SearchKeysArray($dataArray['reports_description'], 'NET_CLAIMS'); ?> is net claims by month after subtracting the reimbursements                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                            (if any) from columns <?php
                            // echo ReportFunctionComponent::SearchKeysArray($dataArray['reports_description'], 'ADJUST_GROSS_CLAIMS'); ?> from the gross claims for the month.  Column <?php echo ReportFunctionComponent::SearchKeysArray($dataArray['reports_description'], 'MEMBER_ENROLLMENT'); ?> is the enrollment units per month for this plan.  Column <?php echo ReportFunctionComponent::SearchKeysArray($dataArray['reports_description'], 'CLAIMS_PER_ENROLLMENT'); ?> equals the net claims divided by enrollment, recent 12                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                            months of column <?php
                            // echo ReportFunctionComponent::SearchKeysArray($dataArray['reports_description'], 'CLAIMS_PER_ENROLLMENT'); ?>.  Column <?php echo ReportFunctionComponent::SearchKeysArray($dataArray['reports_description'], 'TWELVE_MONTH_AVG'); ?> then takes the average of the most recent 12 months of column <?php echo ReportFunctionComponent::SearchKeysArray($dataArray['reports_description'], 'CLAIMS_PER_ENROLLMENT'); ?>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                            Similarly, column <?php
                            // echo ReportFunctionComponent::SearchKeysArray($dataArray['reports_description'], 'TWENTYFOUR_MONTH_AVG'); ?> is the average of the last 24 months of column <?php echo ReportFunctionComponent::SearchKeysArray($dataArray['reports_description'], 'CLAIMS_PER_ENROLLMENT'); ?>.  Column <?php echo ReportFunctionComponent::SearchKeysArray($dataArray['reports_description'], 'TWELVE_MONTH_TREND'); ?> then compares the value for column <?php echo ReportFunctionComponent::SearchKeysArray($dataArray['reports_description'], 'TWELVE_MONTH_AVG'); ?> versus the same figure last year.  Finally, in a similar way, column <?php echo ReportFunctionComponent::SearchKeysArray($dataArray['reports_description'], 'TWENTYFOUR_MONTH_TREND'); ?>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                        -->
                        Columns A - F are the net claims of all possible types on the plan. If your plan does not track one of these claims types, the values will simply appear blank. Net claims are such as stop loss reimbursements or pharmacy rebates. Column H is the total of all net claims on the plan. Column I is the amount that net claims is expected to be for a given month.
                        </td>
                                    </tr>
                                </tbody>
                            </table>  

    
    <?php }//end if
    ?>            
        
        
            
                </td>
                    </tr>
                </tbody>
            </table>
            
            
            
            
            
        <!--    ////////////////////////////////*******************************************/////////////////////////////////// ------------>
     
    
                    
                         
                            
                                    
            <table class="col-sm-12 margin-top-10"  style="margin: 0px auto;" >
                <tbody>
                    <tr>
                        <td>
                        
        <?php $i     = 0;
        $graph_count = 2;if (!empty($dataArray['claim_specific'])) {
            $count_value = count($dataArray['claim_specific']);
            foreach ($dataArray['claim_specific'] as $key => $claims) {
                $FirstElement1 = reset($dataArray['claim_specific'][$key]);?>
                        
                        
            <?php if (($i % 2) == 0) {?>
                        <table style="width:100%;display: block;"><tbody style="width:100%;display: block;"><tr style="width:100%;display: block;"><td style="width:100%;display: block;">
        <?php echo $this->render('_header', ['dataArray' => $dataArray, 'claim_name' => $dataArray['planName']])?>
                        </td></tr></tbody></table>
            <?php } ?>
            <?php if ($i == 0) {
?><table style="width:100%;display: block;"><tbody style="width:100%;display: block;"><tr class="margin-right-10 font-15 margin-bottom-5 col-md-12" style="display: block;">
                                <td><u><b class="fontsize-14"><?php echo $dataArray['planYearTitle'].' - '; ?>Total Paid Plan Claims By Month</b></u></td>
</tr></tbody></table><?php }?>
                            
           <table style="width:100%;display: block;"><tbody style="width:100%;display: block;">
            <tr class="margin-right-10 font-15 margin-bottom-5 col-md-12" style="display: block;">
            <td>
                                
            <b class="fontsize-14"><?php switch ($key) {
            case 1:
                $heading = 'Medical';
                break;
            case 2:
                $heading = 'Pharmacy';
                break;
            case 3:
                $heading = 'Dental';
                break;
            case 4:
                $heading = 'Vision';
                break;
            case 5:
                $heading = 'HRA';
                break;
            case 6:
                $heading = 'HSA';
                break;
           }//end switch
?><u><?php echo $heading.' Claims Detail';?></b></u></td>
           </tr>
           </tbody>
           </table>
                            
           <table style="width:100%;display: block;"><tbody style="width:100%;display: block;">
           <tr class="col-md-12">
            <td class="col-md-6 padding-0 pull-left" style="display: block;">
             <table class="width-100 reports-table " cellspacing="0"
                                                    style="border-collapse: separate; border-spacing: 2px 0;">
              <thead class="">
               <tr class="">
                                                <th class="text-align-center  padding-6 " style="width:10%;"></th>
                                                <td class=" text-align-center padding-6 " style="width:10%;"><b><u>A</u></b></td> 
                                                <td class=" text-align-center padding-6 " style="width:10%;"><b><u>B</u></b></td>
                                                <td class=" text-align-center padding-6 " style="width:10%;"><b><u>C</u></b></td>
                                                <td class=" text-align-center padding-6 " style="width:10%;"><b><u>D</u></b></td>
                                                <td class=" text-align-center padding-6 " style="width:10%;"><b><u>E</u></b></td>
               </tr>
               <tr class="report-header-back">
                                            
                                                <th class="text-align-center  padding-6 "><b><u>Month</u></b></th>
                                                <td class=" text-align-center padding-6 "><b><u>Gross <?php echo $heading;?> Claims</u></b></td> 
                                                <!--<td class=" text-align-center padding-6 "><b><u>Stop Loss reimbursements</u></b></td>
                                                <td class=" text-align-center padding-6 "></td>-->
                                                <?php $gross_value = [];
                                                $net_value         = [];
                                                $adjust            = [];
                                                ;
                                                foreach ($FirstElement1['adjust'] as $adjName => $name) {
                                                    // if($adjName == 'adjust' ){
                                                    // for($adj_count=0;$adj_count<3;$adj_count++){
            ?>
                                                <td class=" text-align-center padding-6 "><b><u><?php if (strpos($adjName, 'NULL_') !== false) {
                                                    echo '';
                                               } else {
    echo ucwords(str_replace('_', ' ', $adjName));
}?></u></b></td>
                <?php
                // }?>
                                                <?php	}?>
                                                <td class=" text-align-center padding-6 black-border"><b><u>Total Monthly Net Claims</u></b></td>                                                
               </tr>
              </thead>
              <tbody>
                <?php foreach ($claims as $claimKey => $claim) {
            ?>
                                            <tr>
                                                <td class="text-align-center  padding-6  border-bottom1"><?php echo $claimKey;?></td>
                                                <td class="text-align-center  padding-6  border-bottom1"><?php if ($claim['claim'] == '') {
                                                    $gross_value[] = 'hi';
                                                    echo '';
                                               } else {
    $gross_value[] = $claim['claim'];
    echo '$'.$claim['claim'];
}?></td>
                <?php  $inc = 10;foreach ($claim['adjust'] as $key => $value) {  ?>
                                                <td class="text-align-center  padding-6  border-bottom1"  <?php if ($value == '') {
?>style="background:#efefef;"<?php
                                               }?>><?php $adjust[$inc][] = $value;
if ($value == '') {
    echo '';
} else {
    echo '$'.$value;
}?></td>
                                                
                <?php     $inc++;
                }?>
                                                <!--<td class="text-align-center  padding-6  border-bottom1" style="background:#efefef;"></td>
                                                <td class="text-align-center  padding-6  border-bottom1" style="background:#efefef;"></td>-->
                                                <td class="text-align-center  padding-6  border-bottom1 black-border-sides"><?php  if ($claim['total'] == 0) {
                                                    $net_value[] = 'hi';
                                                    echo '';
                                               } else {
    $net_value[] = $claim['total'];
    echo '$'.$claim['total'];
}?></td>
                                            </tr>
                <?php   }//end foreach
?>
                                                    <tr> 
                                                    <td class="text-align-center  padding-6  border-bottom1"></td>
                                                    <td class="text-align-center  padding-6  border-bottom1"><u><?php echo '$'.array_sum($gross_value);?></u></td>
                <?php  $inc = 10;foreach ($claim['adjust'] as $key => $value) {  ?>
                                                    <td class="text-align-center  padding-6  border-bottom1"><?php echo '$'.array_sum($adjust[$inc])?></td>
                <?php     $inc++;
                }?>
                                                     <td class="text-align-center  padding-6  border-bottom1"><u><?php echo '$'.array_sum($net_value);?></u></td>
                                                    
                                                     </tr>                                                    
                                                </tbody>
               </table>
                                            
                <?php	$net_value = implode(",", $net_value);
                $net_value       = str_replace('hi', '""', $net_value);
                $gross_value     = implode(",", $gross_value);
                $gross_value     = str_replace('hi', '""', $gross_value);

                ?>
              </td>
                                        
                <?php
                if (! empty($is_pdf)) {
                    if (! empty($deodedJsonCharts[$graph_count])) {
                        ?>
                   <td style="display: block"><img src="<?php echo $deodedJsonCharts[$graph_count];?>"></td>
                            
                    <?php }
                } else { ?>
                  <td class="col-md-6 padding-0 pull-left plan-claims-charts-main-div " style="display: block;margin-top:30px;">
                                    
                   <div class="" id="each_claim_graph_<?php echo $i;?>" style="min-width: 300px; height: 300px; margin: 0 auto"></div>
                  </td>
                <?php }
            ?>
            </tr>    
            </tbody>
            </table>
           <script>
     $(function () {            
    var plan_year_claim_moda32 = Highcharts.chart('each_claim_graph_<?php echo $i;?>', {
        title: {
        text: ''
        },
       credits: {
          enabled: false
      },
        xAxis: {
       labels: {
         style: {
         color: 'black'
         },
   
    },
       title: {
       style: {
             color: 'black',
           },
           enabled: true,
           text: ''
       },
         categories: [<?php echo "'".implode("', '", $monthsArray)."'"; ?>],
        },
     yAxis: {
      allowDecimals: false,
     labels: {
         style: {
         color: 'black'
         },
       formatter: function () {
       return   '$' + numberWithCommas(this.value);
      }
    },
        min: 0,
        title: {
        text: ''
        },
        stackLabels: {
        enabled: false,
        style: {
            fontWeight: 'normal',
            color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
        }
        }
    },
     exporting: { enabled: false },
       legend: {
     symbolRadius: 0,
     symbolWidth: 15,
        align: 'center',
       // x: -30,
        verticalAlign: 'bottom',
        //y: 25,
        floating: false,
       // backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
       // borderColor: '#CCC',
      //  borderWidth: 1,
        shadow: false,
     itemStyle: { "color": "black",fontFamily: "Lato, sans"  },
    },
    plotOptions: {
      series: {
            marker: {
                enabled: false
            }
        },
        column: {
        stacking: 'normal',
        dataLabels: {
            enabled: false,
            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'black'
        }
        }
    },
        series: [{
         name: 'Gross <?php echo $heading;?> Claims',
        type: 'column', 
       data: [<?php echo $gross_value;?>], 
           // data: [612620, 120541, 154202, 225236, 245124, 420010, 220100, 100200, 120120, 142014, 253142, 352525],
        tooltip: {
            valueSuffix: ''
        }
        }, {
      name: 'Net <?php echo $heading;?> Claims',
        type: 'spline',
       data: [<?php echo $net_value;?>], 
           // data: [412620, 520541,454202, 225236, 545124, 320010, 420100, 700200, 220120, 442014, 253142, 352525],
        tooltip: {
            valueSuffix: ''
        }
        }, ],
     colors: [  '#ffc000','#9e480e','#70ad47','#99ff66','#ed7d31','#ff0000','#997300','#43682b','#4472c4','#a5a5a5'],
    });
          });
           </script>
                            
            <?php if (($i % 2) != 0 && ($count_value - 1) != $i) {?>
                                    </td>
                        </tr>
                        </tbody>
                        </table>
                        <table class="col-sm-12 margin-top-10"  style="margin: 0px auto;" >
                <tbody>
                    <tr>
                        <td>
            <?php }?>
                            
                <?php $i++;
                $graph_count++;
            }//end foreach
        }//end if
?>
                            
                            </td>

                            
                            
                            
                            
                            
                            
                            
                            
                            </tr>
                                </tbody>
                    </table>
                    
                    
                                
                                     
                            
                    
        
        
        <!-----------------------------------------------------------              ------------------------------------------------>
        </div>
<?php if (!empty($is_render)) {?>
</div>

</div>
<?php }?>
<script>

$(function () {
    
    
    /***********plan year claim***************/
    
var plan_year_claim_modal =    Highcharts.chart('paid_plan_claims', {

chart: {
     backgroundColor: 'transparent',
     polar: true,
    // type: 'column',
  
  },
       credits: {
      enabled: false
  },
  title: {
 text: ''
},
exporting: { enabled: false },
xAxis: {
    labels: {
     style: {
         color: 'black'
     },
   
},
      title: {
         style: {
             color: 'black',
          },
       enabled: true,
       text: ''
   },
    categories: [<?php echo "'".implode("', '", $monthsArray)."'"; ?>]
},
yAxis: {
     allowDecimals: false,
    labels: {
     style: {
         color: 'black'
     },
     formatter: function () {
            return   '$' + numberWithCommas(this.value);
        }
   
},
    min: 0,
    title: {
        text: ''
    },
    stackLabels: {
        enabled: false,
        style: {
            fontWeight: 'normal',
            color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
        }
    }
},
legend: {
    symbolRadius: 0,
    symbolWidth: 15,
    align: 'center',
   // x: -30,
    verticalAlign: 'bottom',
    //y: 25,
    floating: false,
   // backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
   // borderColor: '#CCC',
  //  borderWidth: 1,
    shadow: false,
    itemStyle: { "color": "black",fontFamily: "Lato, sans"  },
},
//tooltip: {
    
    
       
    tooltip: {
        formatter: function () {
            var s = '<b>' + this.x + '</b>';

        //    $.each(this.points, function () {
            console.log(this.series.type);
            if(this.series.type == 'column'){
                 s += '<br/>' + this.series.name + ': ' +
                   '$'+ numberWithCommas(this.y) + 
                   '<br />Total: $' + numberWithCommas(this.total);
            }else{
                 s += '<br/>' + this.series.name + ': ' +
                   '$'+ numberWithCommas(this.y) ;
            }
               
          //  });

            return s;
        }
            
  //  headerFormat: '<b>{point.x}</b><br/>',
    //if('{series.type' ==  'column'){
    //    pointFormat: '{series.name}:$ '+numberWithCommas('{point.y}')+'<br/>Total: $ '+numberWithCommas('{point.stackTotal}'),
    //}else{
    //    alert({series.name});
        //pointFormat: '{series.name}:$ '+numberWithCommas('{point.y}'),
    //}
    
},
plotOptions: {
     series: {
            marker: {
                enabled: false
            }
        },
    column: {
        stacking: 'normal',
        dataLabels: {
            enabled: false,
            color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'black'
        }
    }
},
colors: [  '#ffc000','#9e480e','#70ad47','#99ff66','#ed7d31','#ff0000','#997300','#43682b','#4472c4','#a5a5a5'],
series: <?php echo $paidClaimsArray; ?>
});


var plan_year_claim_modal2 = Highcharts.chart('paid_plan_claims_area', {
    chart: {
        backgroundColor: 'transparent',
        
    },
         credits: {
      enabled: false
  },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    exporting: { enabled: false },
    xAxis: {
        labels: {
     style: {
         color: 'black'
     },
   
},
     
        categories: [<?php echo "'".implode("', '", $monthsArray)."'"; ?>],
        tickmarkPlacement: 'on',
        title: {
         style: {
             color: 'black',
          },
       enabled: true,
       text: ''
   },
    },
    yAxis: {
         allowDecimals: false,
          title: {
            text: ''
        },
        labels: {
            
            style: {
         color: 'black'
     },
     formatter: function () {
            return   '$' + numberWithCommas(this.value);
        }
     
        }
    },
    legend: {
        symbolRadius: 0,
    symbolWidth: 15,
    align: 'center',
   // x: -30,
    verticalAlign: 'bottom',
    //y: 25,
    floating: false,
   // backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
   // borderColor: '#CCC',
  //  borderWidth: 1,
    shadow: false,
    itemStyle: { "color": "black",fontFamily: "Lato, sans"  },
},
    tooltip: {
        split: true,
       valueSuffix: ''
      pointFormat: '{series.name}:$ '+numberWithCommas('{point.y}'),
       /*     formatter: function () {
            var s = '<b>' + this.x + '</b>';

        //    $.each(this.points, function () {
  
                 s += '<br/>' + this.series.name + ': ' +
                   '$'+ numberWithCommas(this.y) ;
             
               
          //  });

            return s;
        }*/
    },
    plotOptions: {
         series: {
            marker: {
                enabled: false
            }
        },
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    colors: [  '#ffc000','#9e480e','#70ad47','#99ff66','#ed7d31','#ff0000','#997300','#43682b','#4472c4','#a5a5a5'],
    series:  <?php echo $paidClaimsAreaArray; ?>
});

 
    
    
 // var chart = $('#container').highcharts();
    $('#paid_plan_claims_area').on('show.bs.modal', function() {
        $('#paid_plan_claims_area').css('visibility', 'hidden');
          $('#paid_plan_claims').css('visibility', 'hidden');
    });
    $('#paid_plan_claims_area').on('shown.bs.modal', function() {
        $('#paid_plan_claims_area').css('visibility', 'initial');
         $('#paid_plan_claims').css('visibility', 'initial');
          plan_year_claim_modal.reflow();
        plan_year_claim_modal2.reflow();
    });
    
});



// $( document ).ready(function() {
    // $('#download_plan_year_claim_report').click(function(){
                
    // });    
// });


function downloadPlanYearClaimReport(type){
    $('#loading-gif-reports').show();
    $('#plan_year_claims_only_report_scroll').scrollTop(0);
     $("html, body").animate({ scrollTop: 0 },0);
     
     
        var svgElements = $("#plan_year_claims_only_report_print").find('svg');

      //replace all svgs with a temp canvas
      svgElements.each(function() {
        var canvas, xml;

        // canvg doesn't cope very well with em font sizes so find the calculated size in pixels and replace it in the element.
        $.each($(this).find('[style*=em]'), function(index, el) {
          $(this).css('font-size', getStyle(el, 'font-size'));
        });

        canvas = document.createElement("canvas");
        canvas.className = "screenShotTempCanvas";
        //convert SVG into a XML string
        xml = (new XMLSerializer()).serializeToString(this);

        // Removing the name space as IE throws an error
        xml = xml.replace(/xmlns=\"http:\/\/www\.w3\.org\/2000\/svg\"/, '');

        //draw the SVG onto a canvas
        canvg(canvas, xml);
        $(canvas).insertAfter(this);
        //hide the SVG element
        $(this).attr('class', 'tempHide');
        $(this).hide();
      });
     
     
     
        //var element = document.getElementById('plan_year_claims_only_report_print');    
        var charts = [];
        var charts_no = 1;
        var chart_count = $( ".plan-claims-charts-main-div" ).length;
    $( ".plan-claims-charts-main-div" ).each(function() {
         html2canvas($(this), {
         background :'#FFFFFF',
         logging: true,
         onrendered: function(canvas) {
            // canvas is the final rendered <canvas> element
            var myImage = canvas.toDataURL("image/jpeg");
            //console.log(myImage);
            charts.push(myImage);
            //console.log(charts);
            charts_no++;
            //return false;
            if(charts_no == (chart_count+1))
            {
                checkPdfExist('<?php echo $_GET['plan_year_id'];?>','<?php echo $_GET['plan_id'];?>',2,'<?php echo $report_id; ?>',charts,'<?php echo Html::encode(ucfirst($dataArray['reportName'])); ?>.pdf',type);
            }
        }
        });
    });
        
        
    
}
                            </script>
