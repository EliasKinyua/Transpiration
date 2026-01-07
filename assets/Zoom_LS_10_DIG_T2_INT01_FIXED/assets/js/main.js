var val_next=0;
var lenth=0;
var screen_len=0;
var correct=0;
var count=1;
var checks=0;
var valid=0;
var len_ran_num=[];
var check_null=0;
var ar = [];
//var arive='';
var len=[];
//var drpval=0;

var Labelling_drag_and_drop=Labelling_drag_and_drop1;

for(var rand=0;rand<Labelling_drag_and_drop.length;rand++)
{
	len_ran_num.push(rand);
}

function shuffle(len_ran_num) {
    var i = len_ran_num.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        // swap randomly chosen element with current element
        temp = len_ran_num[i];
        len_ran_num[i] = len_ran_num[j];
        len_ran_num[j] = temp;
    }
    return len_ran_num;
}

function acces()
{
	len=shuffle(len_ran_num);
	return len;
}

var json_screen_len=shuffle([Labelling_drag_and_drop.length]);

var feed_text=['Sorry, Your time is up.','Click Reset to try again.'];

$('title').html(Labelling_drag_and_drop_common[0].assetName);
$('#main').append('<div id="titles"></div>');
$('#titles').html(Labelling_drag_and_drop_common[0].authorinst.title);
$('#titles').css('font-size',Labelling_drag_and_drop_common[0].authorinst.font_size);
$('#titles').css('color',Labelling_drag_and_drop_common[0].authorinst.color);
$('#titles').css('font-weight',Labelling_drag_and_drop_common[0].authorinst.font_weight);

$('#main').append('<div id="sub_main"></div>');

$('#main').append('<div id="play_back"></div>');

$('#main').append('<div id="grid_pixles" style="display:none;position:absolute;z-index:2;"></div>');

$('#grid_pixles').append('<div id="top_grid_pixles" style="position:absolute;left:5px;top:95px;width:892px;height:10px;z-index:1;color:#000000;font-size:10px;"></div>');
$('#top_grid_pixles').append('<div id="top_grid_pixles_value_0" style="position:absolute;left:0px;top:-5px;">0</div>');
$('#top_grid_pixles').append('<div id="top_grid_pixles_value_1" style="position:absolute;left:90px;top:-5px;">100</div>');
$('#top_grid_pixles').append('<div id="top_grid_pixles_value_2" style="position:absolute;left:190px;top:-5px;">200</div>');
$('#top_grid_pixles').append('<div id="top_grid_pixles_value_3" style="position:absolute;left:290px;top:-5px;">300</div>');
$('#top_grid_pixles').append('<div id="top_grid_pixles_value_4" style="position:absolute;left:390px;top:-5px;">400</div>');
$('#top_grid_pixles').append('<div id="top_grid_pixles_value_5" style="position:absolute;left:490px;top:-5px;">500</div>');
$('#top_grid_pixles').append('<div id="top_grid_pixles_value_6" style="position:absolute;left:590px;top:-5px;">600</div>');
$('#top_grid_pixles').append('<div id="top_grid_pixles_value_7" style="position:absolute;left:690px;top:-5px;">700</div>');
$('#top_grid_pixles').append('<div id="top_grid_pixles_value_8" style="position:absolute;left:790px;top:-5px;">800</div>');
$('#top_grid_pixles').append('<div id="top_grid_pixles_value_9" style="position:absolute;left:874px;top:-5px;">890</div>');
$('#grid_pixles').append('<div id="left_grid_pixles" style="position:absolute;left:5px;top:95px;width:20px;height:466px;z-index:1;color:#000000;font-size:10px;"></div>');
$('#left_grid_pixles').append('<div id="left_grid_pixles_value_1" style="position:absolute;left:-3px;top:91px;">100</div>');
$('#left_grid_pixles').append('<div id="left_grid_pixles_value_2" style="position:absolute;left:-3px;top:191px;">200</div>');
$('#left_grid_pixles').append('<div id="left_grid_pixles_value_3" style="position:absolute;left:-3px;top:291px;">300</div>');
$('#left_grid_pixles').append('<div id="left_grid_pixles_value_4" style="position:absolute;left:-3px;top:391px;">400</div>');
$('#left_grid_pixles').append('<div id="left_grid_pixles_value_5" style="position:absolute;left:-3px;top:455px;">470</div>');

$('#main').append('<div id="grid_bg" style="position:absolute;top:92px;left:3px;width:894px;height:469px;padding:0px;overflow:hidden;z-index:1;display:none;"></div>');

$('#main').append('<div id="lines" style="top:565px;left:645px;position:absolute;display:none;"><img src="" /></div>');

$('#play_back').append('<img id="play" src="assets/images/play.png" onClick="playing()" style="z-index:5;position:absolute;top:190px;left:395px;cursor:pointer;" />');

$('#main').append('<div id="background_bg"></div>');
$('#background_bg').css('background-image','url('+Labelling_drag_and_drop_common[0].background[0].image+')');
$('#background_bg').css('background-color',Labelling_drag_and_drop_common[0].background[1].color);

$('#main').append('<div id="help_back"></div>');

$('#main').append('<div id="help_pop"></div>');

$('#help_pop').append('<img src="assets/images/popup2.png" style="height: 296px;width: 513px;" />');

$('#help_pop').append('<img class="help_close" src="assets/images/close_1.png" alt="close" onClick="help_close()" style="cursor:pointer;top:4px;left:485px;position:absolute;" />');

$(".help_close").hover(function(){$(this).attr("src","assets/images/close_2.png")},function(){$(this).attr("src","assets/images/close_1.png")});

$('#help_pop').append('<div class="help_title">Help</div>');

$('#help_pop').append('<div class="helptxt_area">');

$('.helptxt_area').css('color',Labelling_drag_and_drop_common[0].help_text_style[0].color);

$('.helptxt_area').css('font-size',Labelling_drag_and_drop_common[0].help_text_style[0].font_size);

$('.helptxt_area').append('<table id="table_contect"></table>');

for(var p=0; p<Labelling_drag_and_drop_common[0].help_text[0].instruction.length; p++)
	{
		$(".helptxt_area table").append('<tr><td style="vertical-align:top;">&#x2022;</td><td style="vertical-align:top;">'+Labelling_drag_and_drop_common[0].help_text[0].instruction[p]['instruction_'+p]+'</td></tr>');
	}

$('#main').append('<div id="reset" class="hovers0" onClick="resets()" style="text-align:center;"></div>');
$('#reset').append('<table style="margin:0px auto;"><tr><td id="reset_radio" valign="middle"><img class="hove4" style="display:block" src="assets/images/btn1.png" /></td><td id="reset_text"></td></tr></table>');
$('#main').append('<div id="help" class="hovers1" onClick="help()" style="text-align:center;"></div>');
$('#help').append('<table style="margin:0px auto;"><tr><td id="help_radio" valign="middle"><img class="hove4" style="display:block" src="assets/images/btn1.png" /></td><td id="help_text"></td></tr></table>');
$('#main').append('<div id="next" class="hovers2" onClick="next()" style="text-align:center;display:none"></div>');
$('#next').append('<table style="margin:0px auto;"><tr><td id="next_radio" valign="middle"><img class="hove4" style="display:block" src="assets/images/btn1.png" /></td><td id="next_text"></td></tr></table>');

$('#main').append('<div id="finish" class="hovers3" onClick="finish()" style="text-align:center;display:none"></div>');
$('#finish').append('<table style="margin:0px auto;"><tr><td id="finish_radio" valign="middle"><img class="hove4" style="display:block" src="assets/images/btn1.png" /></td><td id="finish_text"></td></tr></table>');

$('#reset_text').html(Labelling_drag_and_drop_common[0].resets[0].text);
$('#reset_text').css('color',Labelling_drag_and_drop_common[0].resets[1].color);
$('#reset_text').css('line-height',Labelling_drag_and_drop_common[0].resets[3].line_height);
$('#reset_text').css('font-size',Labelling_drag_and_drop_common[0].resets[2].font_size);
$('#help_text').html(Labelling_drag_and_drop_common[0].help[0].text);
$('#help_text').css('color',Labelling_drag_and_drop_common[0].help[1].color);
$('#help_text').css('font-size',Labelling_drag_and_drop_common[0].help[2].font_size);
$('#help_text').css('line-height',Labelling_drag_and_drop_common[0].help[3].line_height);
$('#next_text').html(Labelling_drag_and_drop_common[0].next[0].text);
$('#next_text').css('color',Labelling_drag_and_drop_common[0].next[1].color);
$('#next_text').css('font-size',Labelling_drag_and_drop_common[0].next[2].font_size);
$('#next_text').css('line-height',Labelling_drag_and_drop_common[0].next[3].line_height);

$('#finish_text').html(Labelling_drag_and_drop_common[0].finish[0].text);
$('#finish_text').css('color',Labelling_drag_and_drop_common[0].finish[1].color);
$('#finish_text').css('font-size',Labelling_drag_and_drop_common[0].finish[2].font_size);
$('#finish_text').css('line-height',Labelling_drag_and_drop_common[0].finish[3].line_height);

for(var h=0;h<4;h++)
{
	$(".hovers"+h).hover(function() {
    $(this).find("img").attr("src", "assets/images/btn2.png")
    }, function() {
    $(this).find("img").attr("src", "assets/images/btn1.png")

    });
}

$('#main').append('<div id="dummy_back" style="position:absolute;top:46px;left:0px;right:0px;width:900px;height:520px;z-index:4;display:none;"></div>');

$('#dummy_back').append('<div id="result_pop"></div>');

$('#result_pop').append('<img style="position:absolute;top:177px;left:215px;" src="assets/images/pop_img.png" />');

$('#result_pop').append('<img class="result_close" src="assets/images/close_1.png" alt="close" onClick="result_close()" style="position:absolute;top:182px;left:610px;cursor:pointer;" />');

$('.result_close').hover(function(){$(this).attr("src","assets/images/close_2.png")},function(){$(this).attr("src","assets/images/close_1.png")});

$('#result_pop').append('<div id="result_title" style="position:absolute;width:395px;height:32px;top:179px;left:216px;text-align:center;font-weight:bold;line-height: 1.75;font-size:18px;">Done?</div>');

$('#result_pop').append('<div id="result_text" style="position:absolute;width:421px;height:123px;top:212px;left:216px;font-size:18px;font-weight:bold;text-align:center;"><p></p><span></span><div></div></div>');

$('#result_text').css('color',Labelling_drag_and_drop_common[0].result_text[0].color);

$('#result_text').css('font-size',Labelling_drag_and_drop_common[0].result_text[0].font_size);

$('#result_text').css('font-weight',Labelling_drag_and_drop_common[0].result_text[0].font_weight);

//$("#result_text").find('p').html("Your score is "+(correct)+" out of "+Labelling_drag_and_drop.length);

$('#main').append('<div id="insert_clear" style="position:absolute;top:93px;left:0px;right:0px;width:900px;height:470px;z-index:1;"></div>');

$('#main').append('<div id="time_img" style="top:565px;left:0px;position:absolute;"><img src="assets/images/strip.png" /></div>');

$('#main').append('<div id="time" style="position:absolute;top:565px;left:0px;width:125px;height:35px;text-align:center;margin:0px auto;"></div>');

$('#time').append('<table id="time_table" style="margin:0px auto;"><tr><td class="timer_txt">'+Labelling_drag_and_drop_common[0].time[1].timer_text+':</td><td class="minute">'+Labelling_drag_and_drop_common[0].time[0].time_counts+'</td><td>:</td><td class="sec">00</td></tr></table>');

$('#time_table').css('color',Labelling_drag_and_drop_common[0].time[2].timer_color);
$('#time_table').css('font-size',Labelling_drag_and_drop_common[0].time[3].timer_font_size);
$('#time_table').css('font-weight','bold');
$('#time_table').css('line-height',Labelling_drag_and_drop_common[0].time[4].line_height);  

function screens(len)
{
$('#sub_main').append('<div id="counts_1" style="position:absolute;top:-33px;left:82px;color:#FFFFFF;font-size:15px;font-weight:bold;">'+count+'</div>');
//$('#sub_main').append('<div id="counts_2" style="position:absolute;top:10px;left:4px;color:#000000;font-size:20px;text-align:center;width:41px;">'+count+'.</div>');
$('#insert_clear').append('<div id="question_nos"></div>');
$('#question_nos').append('<table><tr><td id="counting" style="text-align:right;" width="60px"></td><td style="text-align:center;" width="10px">/</td><td style="text-align:left;" width="60px">'+Labelling_drag_and_drop.length+'</td></tr></table>');
$('#insert_clear').append('<div id="question"><span></span>'+Labelling_drag_and_drop[len].screen[0].authorqus.question+'</div>');
$('#insert_clear').append('<div id="base_imgs"></div>');
$('#base_imgs').append('<div id="base_img"></div>');
$('#question').css('font-size',Labelling_drag_and_drop[len].screen[0].authorqus.font_size);
$('#question').css('color',Labelling_drag_and_drop[len].screen[0].authorqus.color);
$('#counts_2').css('font-size',Labelling_drag_and_drop[len].screen[0].authorqus.font_size);
$('#counts_2').css('color',Labelling_drag_and_drop[len].screen[0].authorqus.color);
$('#counts_2').css('font-weight',Labelling_drag_and_drop[len].screen[0].authorqus.font_weight);
$('#question').css('font-weight',Labelling_drag_and_drop[len].screen[0].authorqus.font_weight);

if(Labelling_drag_and_drop[len].screen[0].base_image[0].src!='')
{
$('#base_img').append('<img src='+Labelling_drag_and_drop[len].screen[0].base_image[0].src+' width='+Labelling_drag_and_drop[len].screen[0].base_image[1].width+' height='+Labelling_drag_and_drop[len].screen[0].base_image[1].height+' />');
$('#base_img').css('top',+Labelling_drag_and_drop[len].screen[0].base_image[1].top);
$('#base_img').css('left',+Labelling_drag_and_drop[len].screen[0].base_image[1].left);
}
else
  {
	for(var base_len=0;base_len<Labelling_drag_and_drop[len].screen[0].base_text.length;base_len++)
		{
			//alert(Labelling_drag_and_drop[len].screen[0].base_text.length)
			$('#base_img').append('<div id="base_text_'+base_len+'">'+Labelling_drag_and_drop[len].screen[0].base_text[base_len].text+'</div>');
			$('#base_text_'+base_len).css('position','absolute');
			$('#base_text_'+base_len).css('width',Labelling_drag_and_drop[len].screen[0].base_text[base_len].width);
			$('#base_text_'+base_len).css('height',Labelling_drag_and_drop[len].screen[0].base_text[base_len].height);
			$('#base_text_'+base_len).css('top',+Labelling_drag_and_drop[len].screen[0].base_text[base_len].top);
			$('#base_text_'+base_len).css('left',+Labelling_drag_and_drop[len].screen[0].base_text[base_len].left);
			$('#base_text_'+base_len).css('color',Labelling_drag_and_drop[len].screen[0].base_text[base_len].color);
			$('#base_text_'+base_len).css('font-size',Labelling_drag_and_drop[len].screen[0].base_text[base_len].font_size);
			$('#base_text_'+base_len).css('font-weight',Labelling_drag_and_drop[len].screen[0].base_text[base_len].font_weight);
		}
  }



$('#insert_clear').append('<div id="instructions">'+Labelling_drag_and_drop[len].screen[0].instructions_text[0].text+'</div>');
$('#instructions').css('color',Labelling_drag_and_drop[len].screen[0].instructions_text[0].color);
$('#instructions').css('top',+Labelling_drag_and_drop[len].screen[0].instructions_text[0].top);
$('#instructions').css('left',+Labelling_drag_and_drop[len].screen[0].instructions_text[0].left);
$('#instructions').css('font-size',Labelling_drag_and_drop[len].screen[0].instructions_text[0].font_size);
$('#instructions').css('font-weight',Labelling_drag_and_drop[len].screen[0].instructions_text[0].font_weight);

if(Labelling_drag_and_drop[len].screen[0].answer_show=='hide')
{var p=0;
for(var i=0;i<Labelling_drag_and_drop[len].screen[0].drag_zone.length;i++)
{Labelling_drag_and_drop[len].screen[0].drag_text[i]
	$('#insert_clear').append('<div id="drag_option'+i+'" class="drag_all" drag_answer="'+(p+=1)+'"><span class="mathml">'+$('#loading'+len).find('#drag_options'+i).html()+'</span></div>');
	$('#drag_option'+i).css('top',+Labelling_drag_and_drop[len].screen[0].drag_zone[i].top);
	$('#drag_option'+i).css('left',+Labelling_drag_and_drop[len].screen[0].drag_zone[i].left);
	$('#drag_option'+i).css('color',Labelling_drag_and_drop[len].screen[0].drag_text_style[0].color);
	$('#drag_option'+i).css('width',Labelling_drag_and_drop[len].screen[0].drag_and_drop_size[0].width);
	$('#drag_option'+i).css('height',Labelling_drag_and_drop[len].screen[0].drag_and_drop_size[0].height);
	$('#drag_option'+i).css('line-height',Labelling_drag_and_drop[len].screen[0].drag_and_drop_size[0].v_align);
	$('#drag_option'+i).css('font-size',Labelling_drag_and_drop[len].screen[0].drag_text_style[0].font_size);
	$('#drag_option'+i).css('font-weight',Labelling_drag_and_drop[len].screen[0].drag_text_style[0].font_weight);

}
for(var j=0;j<Labelling_drag_and_drop[len].screen[0].drop_zone.length;j++)
{ 
	$('#insert_clear').append('<div id="drop_option'+j+'" class="drop_all" drop_answer="'+Labelling_drag_and_drop[len].screen[0].drop_zone[j].answer+'"></div>');
	$('#drop_option'+j).css('top',+Labelling_drag_and_drop[len].screen[0].drop_zone[j].top);
	$('#drop_option'+j).css('left',+Labelling_drag_and_drop[len].screen[0].drop_zone[j].left);
	$('#drop_option'+j).css('width',Labelling_drag_and_drop[len].screen[0].drag_and_drop_size[0].width);
	$('#drop_option'+j).css('height',Labelling_drag_and_drop[len].screen[0].drag_and_drop_size[0].height);
	$('#drop_option'+j).css('line-height',Labelling_drag_and_drop[len].screen[0].drag_and_drop_size[0].v_align);
	$('#drop_option'+j).css('color',Labelling_drag_and_drop[len].screen[0].drag_text_style[0].color);
	$('#drop_option'+j).css('font-size',Labelling_drag_and_drop[len].screen[0].drag_text_style[0].font_size);
	$('#drop_option'+j).css('font-weight',Labelling_drag_and_drop[len].screen[0].drag_text_style[0].font_weight);

}
var fullslots=0;
var ids=[];
$(".drag_all").draggable({
	containment:'.main',
	revert:true,
	start:function(event,ui)
	{
		$(this).css('z-index','3');
		$(this).attr('answer','');
		if($(this).attr('dropped')=='yes')
		{
			thisid=$(this).attr('thisID');
			//count--;
			fullslots--;
			$(this).attr('dropped','');
			$('#'+thisid).droppable({disabled:false});
			//check();
		}
		else
		{/* Do nothing */}
	},
	stop:function(event,ui)
	{
		$(this).css('z-index','1');
	},
	revert:function(event, ui)
	{
		getId=$(this).attr('id');
		gotId=getId.slice(getId.length-1,getId.length);
        $(this).data("uiDraggable").originalPosition = {
            top : Labelling_drag_and_drop[len].screen[0].drag_zone[gotId].top,
           	left : Labelling_drag_and_drop[len].screen[0].drag_zone[gotId].left			
		};
        return !event;
    }
});
$('.drop_all').droppable({drop:function(event,ui)
	{
		$(ui.draggable).css('z-index','1');
		getId=$(this).attr('id');
		gotId=getId.slice(getId.length-1,getId.length);
		$(ui.draggable).attr('answer',(parseInt(gotId)+1));
		$(this).droppable({disabled:true});
		$(ui.draggable).position({my: "center",at: "center",of:$(this)});
		if($(ui.draggable).attr('dropped')=='yes')
		{
			$(ui.draggable).attr('thisID',getId);
		}
		else
		{
			$(ui.draggable).attr('dropped','yes');
			$(ui.draggable).attr('thisID',getId);
			//count++;
			fullslots++;
		}
				
		if(fullslots==Labelling_drag_and_drop[len].screen[0].drop_zone.length)
		{
			for(var k=0;k<Labelling_drag_and_drop[len].screen[0].feedback.length;k++)
				{
					$('#insert_clear').append('<div id="drop_result'+k+'" class="drop_result_all"><img id="res'+k+'" /></div>');
					$('#drop_result'+k).css('top',+Labelling_drag_and_drop[len].screen[0].feedback[k].top);
					$('#drop_result'+k).css('left',+Labelling_drag_and_drop[len].screen[0].feedback[k].left);
				}
				
			for(var i=0;i<Labelling_drag_and_drop[len].screen[0].drag_zone.length;i++)
				{
     					var arive=$("#drag_option"+i).attr('thisid');
						if(arive!=null)
						{
						var drpval = arive.split('drop_option')[1];
						ar=$('#'+arive).attr('drop_answer').split('&');
						var tempval = false;
						for(var j=0;j<ar.length;j++)
						{
						if($("#drag_option"+i).attr('drag_answer')==ar[j])
							{
								var t_f=true;
								$("#drop_result"+i).css('display','block');
								$("#res"+drpval).attr('src',Labelling_drag_and_drop_common[0].feedback_img[0].right);
								
								$("#result_text").find('p').empty();
								//$("#result_text").find('p').html("Your score is "+(correct)+" out of "+Labelling_drag_and_drop.length);
								valid+=1;
								if(valid==Labelling_drag_and_drop[len].screen[0].drop_zone.length)
									{
										correct=correct+1;
										if(correct!=0)
											{
												$("#result_text").find('p').empty();
												//$("#result_text").find('p').html("Your score is "+(correct)+" out of "+Labelling_drag_and_drop.length);
												valid=0;
											}
									}			
								tempval = true;
							}
						else if(!tempval)
							{
								$("#drop_result"+i).css('display','block');
								$("#res"+drpval).attr('src',Labelling_drag_and_drop_common[0].feedback_img[0].wrong);
								checks+=1;
							}
						}
					}
					else if((arive==null)&&(Labelling_drag_and_drop[len].screen[0].drop_zone.length>Labelling_drag_and_drop[len].screen[0].drag_zone.length))
					{
						$("#drop_result"+i).css('display','block');
						$("#res"+drpval).attr('src',Labelling_drag_and_drop_common[0].feedback_img[0].wrong);
						checks+=1;
						break;
					}
					$("#drag_option"+i).draggable({disabled:true});
					$("#drag_option"+i).css('cursor','default','important');
				}
				valid=0;
				checks=0;
		  }
	}});

}//if close
else if(Labelling_drag_and_drop[len].screen[0].answer_show=='show')
{
	for(var i=0;i<Labelling_drag_and_drop[len].screen[0].drag_text.length;i++)
		{
			$('#insert_clear').append('<div id="drag_option'+i+'" class="drag_all"><span>'+Labelling_drag_and_drop[len].screen[0].drag_text[i]+'</span><label>&deg;</label></div>');
			$('#drag_option'+i).css('top',+Labelling_drag_and_drop[len].screen[0].drop_zone[i].top);
			$('#drag_option'+i).css('left',+Labelling_drag_and_drop[len].screen[0].drop_zone[i].left);
			$('#drag_option'+i).css('color',Labelling_drag_and_drop[len].screen[0].drag_text_style[0].color);
			$('#drag_option'+i).css('width',Labelling_drag_and_drop[len].screen[0].drag_and_drop_size[0].width);
			$('#drag_option'+i).css('height',Labelling_drag_and_drop[len].screen[0].drag_and_drop_size[0].height);
			$('#drag_option'+i).css('line-height',Labelling_drag_and_drop[len].screen[0].drag_and_drop_size[0].v_align);
			$('#drag_option'+i).css('font-size',Labelling_drag_and_drop[len].screen[0].drag_text_style[0].font_size);
			$('#drag_option'+i).css('font-weight',Labelling_drag_and_drop[len].screen[0].drag_text_style[0].font_weight);
		}
		
	for(var k=0;k<Labelling_drag_and_drop[len].screen[0].drag_text.length;k++)
		{
		$('#insert_clear').append('<div id="drop_result'+k+'" class="drop_result_all"><img id="res'+k+'"  /></div>');
		$('#drop_result'+k).css('top',+Labelling_drag_and_drop[len].screen[0].feedback[k].top);
		$('#drop_result'+k).css('left',+Labelling_drag_and_drop[len].screen[0].feedback[k].left);
		$("#drop_result"+k).css('display','block');
		$("#res"+k).attr('src',Labelling_drag_and_drop_common[0].feedback_img[0].right);
		}
}//elseclose
else
{

}
}//function close
function next()
{
	valid=0;
	checks=0;			
	tiger();
	//count+=1;
}

function createGrid(size) {
    var ratioW = Math.floor($(window).width()/size),
        ratioH = Math.floor($(window).height()/size);
    
    var parent = $('<div />', {
        class: 'grid', 
        width: ratioW  * size, 
        height: ratioH  * size
    }).addClass('grid').appendTo('#grid_bg');

    for (var i = 0; i < ratioH; i++) {
        for(var p = 0; p < ratioW; p++){
            $('<div />', {
                width: size - 1, 
                height: size - 1
            }).appendTo(parent);
        }
    }
}

createGrid(Labelling_drag_and_drop_common[0].grid[0].show_pixles);

function finish()
{
	$("#result_text").find('span').html(feed_text[1]);
	$("#dummy_back").css("display","block");
	$('#counts_1').html('');
	$("#finish").css("display","none");
	$('#lines').css('display','none');
					$('#counts_2').html('');
					$('#insert_clear').empty();
					val_next=0;
					lenth=0;
   			    	screen_len=0;
					correct=0;
					count=1;
					checks=0;
					if(Labelling_drag_and_drop_common[0].time_display=='show')
						{
							clearInterval(timeinter);
							$("#time_img").css('display','block');
							$("#time").css('display','block');
							clearTimeout(timeinter);
						}
					else
						{
							$("#time_img").css('display','none');
							$("#time").css('display','none');
						}
}

function tiger(){
	count+=1;
	if (Labelling_drag_and_drop.length==$('#counts_1').html())
		{
			$('#counts_1').html('');
			$('#counts_2').html('');
			$('#insert_clear').empty();
			val_next=0;
			lenth=0;
   			screen_len=0;
			correct=0;
			count=1;
			checks=0;
			if(Labelling_drag_and_drop_common[0].time_display=='show')
				{
					clearInterval(timeinter);
					$("#time_img").css('display','block');
					$("#time").css('display','block');
					clearTimeout(timeinter);
				}
			else
				{
					$("#time_img").css('display','none');
					$("#time").css('display','none');
				}
		}
	else
		{
			$('#insert_clear').empty();
			$('#sub_main').empty();
			lenth++;
			init(len[lenth]);
			if (Labelling_drag_and_drop.length==$('#counts_1').html())
				{
					$("#next").css("display","none");
					$("#finish").css("display","block");
				}
			else
				{
					$("#next").css("display","block");
					$("#finish").css("display","none");
				}
		}
}

function help_close(){
$("#help_back").css('display','none');
$("#help_pop").css('display','none');
}

function result_close(){
val_next=0;
lenth=0;
screen_len=0;
correct=0;
count=1;
checks=0;
if(correct>0)
	{
		correct=0;
		$("#result_text").find('p').empty();
		$("#result_text").find('span').empty();
		//$("#result_text").find('p').html("Your score is "+(correct)+" out of "+Labelling_drag_and_drop.length);
	}
	else
	{
		correct=0;
		$("#result_text").find('p').empty();
		$("#result_text").find('span').empty();
		//$("#result_text").find('p').html("Your score is "+(correct)+" out of "+Labelling_drag_and_drop.length);
	}
$("#result_text").find('span').empty();
$("#dummy_back").css('display','none');
$("#play_back").css('display','block');
$("#next").css('display','none');
$('#insert_clear').empty();
$('#sub_main').empty();
$('#main #time').empty();
$('#grid_bg').css('display','none');
$('#grid_pixles').css('display','none');
$('#time').append('<table id="time_table" style="margin:0px auto;"><tr><td class="timer_txt">'+Labelling_drag_and_drop_common[0].time[1].timer_text+':</td><td class="minute">'+Labelling_drag_and_drop_common[0].time[0].time_counts+'</td><td>:</td><td class="sec">00</td></tr></table>');

$('#time_table').css('color',Labelling_drag_and_drop_common[0].time[2].timer_color);
$('#time_table').css('font-size',Labelling_drag_and_drop_common[0].time[3].timer_font_size);
$('#time_table').css('font-weight','bold');
$('#time_table').css('line-height',Labelling_drag_and_drop_common[0].time[4].line_height);
}

function help(){
$("#help_back").css('display','block');
$("#help_pop").css('display','block');
}

function resets(){
	$('#sub_main').empty();
	$('#insert_clear').empty();
	$("#dummy_back").css('display','none');
	$("#result_text").find('span').empty();
	val_next=0;
	lenth=0;
    screen_len=0;
	correct=0;
	count=1;
	checks=0;
	$("#sub_main").css('display','none');
	$("#play_back").css('display','block');
	$('#next').css('display','none');
	$('#finish').css('display','none');
	$('#lines').css('display','none');
	$('#grid_bg').css('display','none');
	$('#grid_pixles').css('display','none');
	
	if(correct>0)
	{
		correct=0;
		$("#result_text").find('p').empty();
		//$("#result_text").find('p').html("Your score is "+(correct)+" out of "+Labelling_drag_and_drop.length);
	}
	else
	{
		correct=0;
		$("#result_text").find('p').empty();
		//$("#result_text").find('p').html("Your score is "+(correct)+" out of "+Labelling_drag_and_drop.length);
	}
	
	if(Labelling_drag_and_drop_common[0].time_display=='show')
	{
		$('#main #time').empty();
		clearInterval(timeinter);
		clearTimeout(timeinter);
		$('#main').append('<div id="time" style="position:absolute;top:565px;left:0px;width:125px;height:35px;text-align:center;"></div>');
		$('#time').append('<table id="time_table" style="margin:0px auto;"><tr><td class="timer_txt">'+Labelling_drag_and_drop_common[0].time[1].timer_text+':</td><td class="minute">'+Labelling_drag_and_drop_common[0].time[0].time_counts+'</td><td>:</td><td class="sec">00</td></tr></table>');
		$('#time_table').css('color',Labelling_drag_and_drop_common[0].time[2].timer_color);
		$('#time_table').css('font-size',Labelling_drag_and_drop_common[0].time[3].timer_font_size);
		$('#time_table').css('font-weight','bold');
		$('#time_table').css('line-height',Labelling_drag_and_drop_common[0].time[4].line_height);
		$("#time_img").css('display','block');
		$("#time").css('display','block');
	}
else
	{
		$("#time_img").css('display','none');
		$("#time").css('display','none');
	}		
}

function init(val)
	{
		if(Labelling_drag_and_drop.length != $('#counts_1').text() && $("#dummy_back").css("display","none")!=false){
				
				screens(val);
			}
		else
			{
				clearInterval(timeinter);
				("#dummy_back").css("display","block");
				$('#counts_1').html('');
				$('#counts_2').html('');
				$('#insert_clear').empty();
				clearTimeout(timeinter);
				val_next=0;
				lenth=0;
			    screen_len=0;
				correct=0;
				count=1;
				checks=0;
			}
	}
	
function playing()
{
$('#insert_clear').empty();
$('#sub_main').empty();
$("#sub_main").css('display','block');
$("#insert_clear").css('display','block');
$("#play_back").css('display','none');
$('#next').css('display','block');
$('#lines').css('display','block');
acces();
init(len[0]);
if (Labelling_drag_and_drop.length==$('#counts_1').html())
	{
		$("#next").css("display","none");
		$("#finish").css("display","block");
	}
else
	{
		$("#next").css("display","block");
		$("#finish").css("display","none");
	}
if(Labelling_drag_and_drop_common[0].time_display=='show')
	{
		timefun();
		$("#time_img").css('display','block');
		$("#time").css('display','block');
	}
else if(Labelling_drag_and_drop_common[0].time_display=='hide')
	{
		$("#time_img").css('display','none');
		$("#time").css('display','none');
	}
else
	{
		alert('Please mention proper time display');
	}
	
if(Labelling_drag_and_drop_common[0].grid[0].display=='show')
	{
		$("#grid_bg").css('display','block');
		$('#grid_pixles').css('display','block');
	}
else if(Labelling_drag_and_drop_common[0].grid[0].display=='hide')
	{
		$("#grid_bg").css('display','none');
		$('#grid_pixles').css('display','none');
	}
else
	{
		alert('Please mention proper grid display');
	}

}

var get_min = Labelling_drag_and_drop_common[0].time[0].time_counts;

function timefun()
{
	if(get_min > 0)
	{
		var sec = 60;
		var min = get_min;
		timeinter = setInterval(function()
		{
			if(sec == 60)
			{
				min--;
				if(min < 10)
				{
					$(".minute").html("0" + min);
				}
				else
				{
					$(".minute").html(min);
				}
			}
			sec--;
			if(sec < 10)
			{
				$(".sec").html("0" + sec);
			}
			else
			{
				$(".sec").html(sec);
			}
			if(sec == 0)
			{
				sec = 60;
				if(min == 0)
				{
					check = false;
					$("#result_text").find('span').text('');
					$("#result_text").find('span').text(feed_text[0]);
					$("#result_text").find('div').text(feed_text[1]);
					clearInterval(timeinter);
					$("#finish").css("display","none");
					$("#next").css("display","none");
					$("#lines").css("display","none");
					$("#dummy_back").css("display","block");
					$('#counts_1').html('');
					$('#counts_2').html('');
					$('#insert_clear').empty();
					clearTimeout(timeinter);
					val_next=0;
					lenth=0;
			       	screen_len=0;
					correct=0;
					count=1;
					checks=0;
				}	
			}	
		},1000);
	}
}

function body_load()
{
	var k=0;
	var l=0;
	$('#main').append('<div id="load" style="display:none;"></div>');
	for(var i=0;i<Labelling_drag_and_drop.length;i++)
		{
			$('#load').append('<div id="loading'+(k)+'"></div>');
			for(var j=0;j<Labelling_drag_and_drop[i].screen[0].drag_text.length;j++)
				{
					$('#loading'+i).append('<div id="drag_options'+j+'" class="drag_all"><span>'+Labelling_drag_and_drop[i].screen[0].drag_text[j]+'</span></div>');
					
				}
			k++;
		}
}

$(document).ready(function(){
if(Labelling_drag_and_drop_common[0].time_display=='show')
	{
		$("#time_img").css('display','block');
		$("#time").css('display','block');
	}
else if(Labelling_drag_and_drop_common[0].time_display=='hide')
	{
		$("#time_img").css('display','none');
		$("#time").css('display','none');
	}
else
	{
		alert('Please mention proper time display');
	}
});

