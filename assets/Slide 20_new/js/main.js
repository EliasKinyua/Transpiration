
$(document).ready(function()
{
	// ===========================================================================
	// VARS
	// ===========================================================================
	
	// ---------------------------------------------------------------------------
	// VARS - SHELL
	// ---------------------------------------------------------------------------
	
	var containerDiv					= $('#container');
	var contentDiv						= $('#content');
	var contentDivW						= 976;
	var contentDivH						= 600;
	var headerBtnDiv 					= $('div.header_btn', '#header');
	var headerBtnTxtDiv 				= $('div.header_txt', '#header');
	var headerDiv 						= $('#header', '#container');
	var headerNavDiv 					= $('#header_nav', '#header');
	var headerTiDiv 					= $('#header_title', '#header');
	var helpBtnDiv 						= $('#help_btn', '#header_nav');
	var helpBtnsDiv 					= $('div.buttons', '#help');
	var helpCloseBtnDiv 				= $('#help_close_btn','#help');
	var helpContentHolderDiv 			= $('#help_content_holder','#help');
	var helpDiv 						= $('#help', '#container');
	var helpDragDiv 					= $('#help_drag', '#help');
	var helpInstructDiv 				= $('div.instructions', '#help');
	var helpTiDiv 						= $('#help_title', '#help');
	var preloadArray					= new Array();
	var preloaded						= false;
	var scrollPane						= $('.scroll-pane', '#container');

	// ---------------------------------------------------------------------------
	// VARS - MATCH
	// ---------------------------------------------------------------------------

	var correctArray					= new Array();
	var itemCurr						= 0;
	var itemCorrectCount 				= 0;
	var itemCorrectDiv 					= $('#correct_counter', '#content');	
	var itemCounterDiv 					= $('#item_counter', '#content');	
	var itemDiv							= $('div.item', '#items');
	var itemNextBtnDiv					= $('#next_btn', '#content');
	var itemPrevBtnDiv					= $('#prev_btn', '#content');
	var itemResetBtnDiv 				= $('#reset_btn', '#content');
	var itemsArray						= new Array();
	var itemsDiv						= $('#items', '#content');
	var itemsTotal						= $('div.item').size();
	var itemTxtDiv						= $('div.item_txt', '#items');	
	var labelsArray						= new Array();
	var labelDiv 						= $('div.label', '#labels');
	var labelsTotal						= $('div.label').size();
	var labelsDiv;
	var labelsSel;
	var labelsSelBtnDiv;
	var labelsStr;
	var panelDiv 						= $('#panel', '#content');
	var panelContentDiv 				= $('#panel_content', '#panel');
		
		
		
	
	// ===========================================================================
	// VALUES
	// ===========================================================================
	
	// ---------------------------------------------------------------------------
	// VALUES - SETUP
	// ---------------------------------------------------------------------------
	
	function valuesSetup()
	{
		for (var i = 0; i < itemsTotal; i++)
		{
			itemsArray[i] 			= new Object();
			itemsArray[i].txt 		= itemDiv.eq(i).html();
			itemsArray[i].target 	= itemDiv.eq(i).data('target');
			
			correctArray[i] 		= false;
		}
		
		for (var j = 0; j < labelsTotal; j++)
		{
			labelsArray[j] 			= new Object();
			labelsArray[j].txt		= labelDiv.eq(j).html();
			labelsArray[j].id		= labelDiv.eq(j).attr('id');
		}
		
		labelsArray.sort(function (a, b)
		{
			if (a.txt < b.txt) return -1;
			if (a.txt > b.txt) return 1;
			
			return 0;
		});
		
		itemsArray.sort(function (a, b)
		{
			if (a.txt < b.txt) return -1;
			if (a.txt > b.txt) return 1;
			
			return 0;
		});
		
		randomise(itemsArray);
		
		rerandomise();
		rerandomise();
	}	
	
	// ---------------------------------------------------------------------------
	// VALUES - RERANDOMISE
	// ---------------------------------------------------------------------------	
	
	function rerandomise()
	{
		dragsOrdered = 0;
		
		for (var i = 0; i < itemsTotal; i++)
		{
			if (itemsArray[i].target == i)
			{
				dragsOrdered ++;
			}
		}
		
		if (dragsOrdered > 2)
		{
			randomise(itemsArray);
		}
	}	
		
		
		
	
	// ===========================================================================
	// ITEMS
	// ===========================================================================
	
	// ---------------------------------------------------------------------------
	// ITEMS - SETUP
	// ---------------------------------------------------------------------------
		
	function itemsSetup()
	{
		itemSet();
		
		itemCounterDiv.html('Screen ' + (itemCurr + 1) + ' of ' + itemsTotal);
		itemCorrectDiv.html('<strong>0</strong> of <strong>' + itemsTotal + '</strong> answered correctly');
		
		itemNextBtnDiv.on('click', function()
		{
			itemNext();
		});
		
		itemPrevBtnDiv.on('click', function()
		{
			itemPrev();
		});
		
		itemResetBtnDiv.on('click', function()
		{
			itemReset();
		});
	}
	
	// ---------------------------------------------------------------------------
	// ITEM - SET
	// ---------------------------------------------------------------------------
		
	function itemSet()
	{
		panelContentDiv.html(itemsArray[itemCurr].txt);
	}
	
	// ---------------------------------------------------------------------------
	// ITEM - NEXT
	// ---------------------------------------------------------------------------
		
	function itemNext()
	{
		if (itemCurr < (itemsTotal - 1))
		{
			itemCurr ++;
		}
		else if (itemCurr == (itemsTotal - 1))
		{
			itemCurr = 0;
		}
		
		itemSwitch();
	}
	
	// ---------------------------------------------------------------------------
	// ITEM - PREV
	// ---------------------------------------------------------------------------
		
	function itemPrev()
	{
		if (itemCurr > 0)
		{
			itemCurr --;
		}
		else
		{
			itemCurr = itemsTotal - 1;
		}
		
		itemSwitch();
	}
	
	// ---------------------------------------------------------------------------
	// ITEM - PREV
	// ---------------------------------------------------------------------------
		
	function itemSwitch()
	{
		itemSet();
		labelsSet();
		
		itemCounterDiv.html('Screen ' + (itemCurr + 1) + ' of ' + itemsTotal);
	}
	
	// ---------------------------------------------------------------------------
	// ITEM - RESET
	// ---------------------------------------------------------------------------
		
	function itemReset()
	{
		itemCurr						= 0;
		itemCorrectCount 				= 0;
		
		for (var i = 0; i < correctArray.length; i++)
		{
			correctArray[i] = false;
		}
		
		itemCorrectDiv.html('<strong>' + itemCorrectCount + '</strong> of <strong>' + itemsTotal + '</strong> answered correctly');
		itemCounterDiv.html('Screen ' + (itemCurr + 1) + ' of ' + itemsTotal);
		
		itemSet();
		labelsSet();
	}
	
	
	
	
	
	// ===========================================================================
	// LABELS
	// ===========================================================================
	
	// ---------------------------------------------------------------------------
	// LABELS - SETUP
	// ---------------------------------------------------------------------------
	
	function labelsSetup()
	{
		// Str
		
		labelsStr = '<select id="labels_sel"><option value="-1">Select...</option>';
		
		$.each(labelsArray, function(i, value)
		{
			labelsStr += '<option value="' + labelsArray[i].id + '">' + labelsArray[i].txt + '</option>';
		});
		
		labelsStr += '</select>';
		
		
		// Div
		
		labelsDiv = $('<div id="labels_holder">' + labelsStr + '</div>');
			
		contentDiv.append(labelsDiv);
		
		labelsDiv.css(
		{
			'position':				'absolute',
			'left': 				panelDiv.position().left + (panelDiv.width()*0.5 - 150),
			'top':					panelDiv.position().top + 21,
			'height':				120
		});
		
		
		// Select
		
		labelsSel = labelsDiv.children('#labels_sel');
		
		labelsSel.selectmenu
		({
			width: 300,
			change: function( event, ui )
			{
				labelsCheck();
			}
		});
	}
	
	// ---------------------------------------------------------------------------
	// LABELS - CHECK
	// ---------------------------------------------------------------------------
	
	function labelsCheck()
	{
		$('div.item_correct', labelsDiv).remove();
		$('div.item_incorrect', labelsDiv).remove();
					
		if (labelsSel.val() == itemsArray[itemCurr].target)
		{
			labelsDiv.append('<div class="item_correct"></div>'); 
			
			correctArray[itemCurr] = true;
		}
		else if (labelsSel.val() == -1)
		{
			correctArray[itemCurr] = false;
		}
		else
		{
			labelsDiv.append('<div class="item_incorrect"></div>'); 
			
			correctArray[itemCurr] = false;
		}
		
		correctCount();
	}
	
	// ---------------------------------------------------------------------------
	// LABELS - CORRECT COUNT
	// ---------------------------------------------------------------------------
	
	function correctCount()
	{
		itemCorrectCount = 0;
		
		for (var i = 0; i < correctArray.length; i++)
		{
			if (correctArray[i] == true)
			{
				itemCorrectCount ++;
			}
		}
		
		itemCorrectDiv.html('<strong>' + itemCorrectCount + '</strong> of <strong>' + itemsTotal + '</strong> answered correctly');
	}
	
	// ---------------------------------------------------------------------------
	// LABELS - SET
	// ---------------------------------------------------------------------------
	
	function labelsSet()
	{
		$('div.item_correct', labelsDiv).remove();
		$('div.item_incorrect', labelsDiv).remove();
					
		if (correctArray[itemCurr] == true)
		{
			labelsDiv.append('<div class="item_correct"></div>');
			
			labelsSel.val(itemsArray[itemCurr].target);
		}
		else
		{
			labelsSel.val(-1);
			
		}
		
		labelsSel.selectmenu('refresh', true);
	}
		
		
		
		
	
	// ===========================================================================
	// HEADER NAV
	// ===========================================================================
	
	// ---------------------------------------------------------------------------
	// HEADER NAV - ON - DOWN
	// ---------------------------------------------------------------------------
		
	headerBtnDiv.on('mousedown', function()
	{
		if ($(this).hasClass('disabled') == false || $(this).hasClass('selected') == false)
		{
			$(this).removeClass('up').addClass('down');
		}
	});
	
	// ---------------------------------------------------------------------------
	// HEADER NAV - ON - UP
	// ---------------------------------------------------------------------------
		
	headerBtnDiv.on('mouseup', function()
	{
		if ($(this).hasClass('disabled') == false || $(this).hasClass('selected') == false)
		{
			$(this).removeClass('down').addClass('up');
		}
	});
	
	
	
	
	
	// ===========================================================================
	// HEADER NAV - HELP
	// ===========================================================================
	
	// ---------------------------------------------------------------------------
	// HEADER NAV - HELP - BTN - DOWN
	// ---------------------------------------------------------------------------
		
	helpBtnDiv.on('mousedown', function()
	{
		if ($(this).hasClass('disabled') == false || $(this).hasClass('selected') == false)
		{
			$(this).removeClass('up').addClass('down');
		}
	});
	
	// ---------------------------------------------------------------------------
	// HEADER NAV - HELP - BTN - UP
	// ---------------------------------------------------------------------------
		
	helpBtnDiv.on('mouseup', function()
	{
		if ($(this).hasClass('disabled') == false || $(this).hasClass('selected') == false)
		{
			$(this).removeClass('down').addClass('up');
		}
	});
	
	// ---------------------------------------------------------------------------
	// HEADER NAV - HELP - BTN - CLICK
	// ---------------------------------------------------------------------------
		
	helpBtnDiv.on('click', function()
	{
		if ($(this).hasClass('selected'))
		{
			$(this).removeClass('selected').addClass('up');
			
			helpDiv.hide();
			
			helpDiv.centerHorizontal();
			helpDiv.css('top', '70px');
		}
		else
		{
			$(this).removeClass('up').addClass('selected');
			
			helpDiv.show();
			
			scrollPane.jScrollPane({maintainPosition:false,autoReinitialise:true});
		}
	});
	
	
	
	
	
	// ===========================================================================
	// HELP
	// ===========================================================================
	
	// ---------------------------------------------------------------------------
	// HELP - SETUP
	// ---------------------------------------------------------------------------
		
	function helpSetup()
	{
		helpDiv.centerHorizontal();
		helpDiv.css('top', '65px');
		
		helpTiDiv.centerHorizontal();
		
		helpDiv.find('div.button').each(function()
		{
			$(this).children('p.desc').not(':last').css('margin-bottom', '10px');
		});
		
		helpDiv.draggable(
		{
			handle: helpDragDiv,
			containment: 'parent'
		});
		
		helpDiv.css('cursor', 'default');
	};
	
	// ---------------------------------------------------------------------------
	// HELP - CLOSE BTN
	// ---------------------------------------------------------------------------
		
	helpCloseBtnDiv.on('click', function()
	{
		helpBtnDiv.removeClass('selected').addClass('up');
		
		helpDiv.hide();
		
		helpDiv.centerHorizontal();
		helpDiv.css('top', '65px');
	});
	
	
	
	
	
	// ===========================================================================
	// INTERFACE
	// ===========================================================================
	
	// ---------------------------------------------------------------------------
	// INTERFACE - SETUP
	// ---------------------------------------------------------------------------
		
	function interfaceSetup()
	{
		$('#header_title').centerHorizontal();
		
		$('#image').hide();
		$('#help').hide();
		
		/*$(document).bind(
			'touchmove',
			function(e)
			{
				e.preventDefault();
			}
		);*/
	};
	
	
	
	
	
	// ===========================================================================
	// INIT
	// ===========================================================================
		
	$(function()
	{
		helpSetup();
		valuesSetup();
		itemsSetup();
		labelsSetup();
		interfaceSetup();
		
		preloaded = true;
		
		// PRELOAD CSS IMAGES
		// DO NOT USE FOLLOWING IF TO BE RUN LOCALLY!
		
		$.preloadCssImages(); 
		
		// TO PRELOAD HTML IMAGES
		
		for (var i = 0; i < preloadArray.length; i++)
		{
		var img = new Image();
			img.src = preloadArray[i];
		};
		
	});
	
	
	
	
	
	// ===========================================================================
	// ON LOADED
	// ===========================================================================
		
	$(window).load(function ()
	{
	var loader = setInterval(function() 
		{
			if (preloaded == true)
			{
				$('#loading').hide();
		
				$('body *').not(':has(select),:has(input)').not('select,input').disableSelection();
				
				$('body').css('background', 'url(css/img/bg_repeat.png) repeat-x #FAFAFA');
				$('#header').css('background', 'url(css/img/header_repeat.png) repeat-x');
				
				clearInterval (loader);
			}
		}, 1000);
	});
	
	
	
	
	
	// ===========================================================================
	// UTILS
	// ===========================================================================
		
	// ---------------------------------------------------------------------------
	// UTILS - DISABLE SELECTION
	// ---------------------------------------------------------------------------
	
	$.fn.extend({ 
		disableSelection : function()
		{ 
			this.each(function()
			{ 
				this.onselectstart = function() { return false; }; 
				this.unselectable = "on"; 
				
				$(this).css('user-select', 'none'); 
				$(this).css('-o-user-select', 'none'); 
				$(this).css('-moz-user-select', 'none'); 
				$(this).css('-khtml-user-select', 'none'); 
				$(this).css('-webkit-user-select', 'none'); 
			});
			
			return this;
		} 
	}); 
		
	// ---------------------------------------------------------------------------
	// UTILS - CENTER HORIZONTAL
	// ---------------------------------------------------------------------------
	
	$.fn.centerHorizontal = function()
	{
		var child 		= $(this);
		var parent 		= $(this).parent();
		var parentPos	= parent.position();
		var parentW 	= $(parent).innerWidth() / 2;
		var childW	 	= $(child).innerWidth() / 2;
		
		$(child).css('left', parentW - childW);
	};
	
	// ---------------------------------------------------------------------------
	// UTILS - CENTER VERTICAL
	// ---------------------------------------------------------------------------
	
	$.fn.centerVertical = function()
	{
		var child 		= $(this);
		var parent 		= $(this).parent();
		var parentPos	= parent.position();
		var parentH 	= $(parent).innerHeight() / 2;
		var childH	 	= $(child).innerHeight() / 2;
		
		$(child).css('top', parentH - childH);
	};
	
	// ---------------------------------------------------------------------------
	// UTILS - GET TEXT WIDTH
	// ---------------------------------------------------------------------------
	
	$.fn.textWidth = function()
	{
		var fontSize = $(this).css('fontSize');
		var fontWeight = $(this).css('fontWeight');
			
		var calc = '<span style="display:none;font-size:' + fontSize + ';font-weight:' + fontWeight + '">' + $(this).text() + '</span>';
			
		$('body').append(calc);
			
		var width = $('body').find('span:last').width();
		$('body').find('span:last').remove();
		
		return width;
	};
	
	// ---------------------------------------------------------------------------
	// UTILS - GET TEXT HEIGHT
	// ---------------------------------------------------------------------------
	
	$.fn.textHeight = function()
	{
		var fontSize = $(this).css('fontSize');
		var fontWeight = $(this).css('fontWeight');
		
		var calc = '<span style="display:none;font-size:' + fontSize + ';font-weight:' + fontWeight + '">' + $(this).text() + '</span>';
		
		$('body').append(calc);
		
		var height = $('body').find('span:last').height();
		
		$('body').find('span:last').remove();
		
		return height;
	};
	
	// ---------------------------------------------------------------------------
	// UTILS - RANDOMISE
	// ---------------------------------------------------------------------------
	
	function randomise(array)
	{
	 	array.sort(function() { return 0.5 - Math.random() });
	};
		
});