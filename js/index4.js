// $(document).ready(function () {
$(window).load(function() {

	var background=$(".slideBackground > .background");
	var header=$("#header_vertical");
	
	setTimeout(function(){
		header.stop(true).animate({
			left: '0%',
			},500, function() {
				// setTimeout(function(){
					$(".active").first().stop(true).animate({
						width: '90%',
						left: '10%'
					},1200);
				
		});
		background.first().stop(true).animate({
			opacity: 1
		},800);		
	},600);
		
	//slider background ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		setInterval(function(){
			var slideBackgrounds=$(".slideBackground > .background").first();			
			slideBackgrounds.next().stop(true).animate({
				opacity: 1,
				},1600, function() {
					slideBackgrounds.css({
						opacity: 0
					});
					slideBackgrounds.appendTo($(".slideBackground"));					
			});			
		},8000);
		
	//fin slider background ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		
	// funcion miniatura menu vista vertical *********************************
		//falta poner candado de pc o dispositivo
		var nav_vertical=$(".nav_vertical");
		$("#nav").click(function(event) {
			var show_nav=nav_vertical.css('display');
			if(show_nav=="none"){
				nav_vertical.css('display', 'block');
			}
			else{
				nav_vertical.css('display','none');
			}
		});

	//fin miniatura menu *****************************************************
	
	
	// Variables iniciales
	var navActual;
	var about=$(".about");
	var activeActual=$(".active").first();
	var active;
	var anim_left;
	var about_ini='-60%';
	var visible_about;
	var contact_top='0%';
	var appAside_left ='0%';
	var appAside_top = '0%';
	var info_top="down";

	var scrollbarAbout="outside";


	// restructuracion de tamaño de pagina *********Revisar
		$(window).resize(function(event) {
			screen_height=$(window).height();
			screen_width=$(window).width();
			// if(screen_width<screen_height){
			if(screen_width <= 850){
				screen_view='portrait';
				anim_left='0%';
				about_ini='80%';
				contact_top='0%';
				nav_vertical.css('display', 'none');
				appAside_left='0%';
				scrollbarAbout='inside';
				info_top="up";
				$('.app-show-info').css({
					display: 'block'
				}).stop(true).animate({
					top: '92%',
					},
					400, function() {
					/* stuff to do after animation is complete */
				});
				if ($(".app_aside").css('display')!='none') {
					$(".app-aside").stop(true).animate({
						left: appAside_left,
						top: appAside_top
						},400, function() {
						/* stuff to do after animation is complete */
					});
				}	

			}
			else{
				screen_view='landscape';
				anim_left='17%';
				about_ini='18%';
				contact_top='10%';	
				nav_vertical.css('display', 'block');
				appAside_left='72%';
				appAside_top='0%';
				scrollbarAbout='outside';

				$(".app-aside").css({
					display: 'block'
				}).stop(true).animate({
					left: appAside_left,
					top: appAside_top
					},400, function() {
					/* stuff to do after animation is complete */
				});
				$('.app-show-info').css({
					display: 'none',
					top: '100%'
				});
				// $('.app-show-info').css({
				// 	display: 'none'
				// });
			}
			// if($(".app-show-info").css('display')!='none'){
				
			// }
			
			if(about.css('display')!='none'){					
				about.stop(true).stop(true).animate({
					left: anim_left,
					},1000, function() {
					/* stuff to do after animation is complete */
				});
			}
			$(".about").mCustomScrollbar({
				theme:"inset-3-dark",
				scrollbarPosition: scrollbarAbout		
			});

		});
	// fin de restructuracion de tamaño de pagina

	//Orientacion inicial ----------------------
	var screen_view='';

	//screen_height=$(window).height();
	screen_width=$(window).width();
	if(screen_width <= 850){
		screen_view='portrait';
		anim_left='0%';
		about_ini='80%';
		contact_top='0%';
		scrollbarAbout='inside';
	}
	else{
		screen_view='landscape';
		anim_left='17%';
		about_ini='18%';
		contact_top='10%';	
		scrollbarAbout='outside';
	}

	//Animacion Inicial	
		about.css('display', 'block');
		setTimeout(function(){
			about.stop(true).animate({
				left: anim_left,
				opacity: 1
				},800, function() {
			});
		},1200);		
		$(".about").mCustomScrollbar({
			theme:"inset-3-dark",
			scrollbarPosition: scrollbarAbout	
		});
			
		$(".portfolio").mCustomScrollbar({
			theme:"inset-3-dark",
			scrollbarPosition: "inside"		
		});
		

	

	/* hide_sections    funcion para ocultar todas las secciones*/
	function hide_sections(){
		$(".portfolio").stop(true).animate({
			left: '100%',
			opacity: 0
			},1000, function() {		
			$(".portfolio").css('display', 'none');							
		});		
		
		$(".portfolio-background").stop(true).animate({
			opacity: '0',
			},1000, function() {	
				$(".portfolio-background").css('display','none');							
		});
		$("#contact").stop(true).animate({
			top: '100%',
			},500, function() {
				$("#contact").css('display', 'none');
		});
		about.stop(true).animate({
			left: about_ini,
			opacity: 0
			},800, function() {
				about.css('display', 'none');
		});
		$("#cv").stop(true).animate({
			opacity: 0
			},500, function(){
				$("#cv").css('display', 'none');
		});
	}
	// Cambio de secciones ******************************************************************************
		$(".nav_vertical ul li").click(function(event){
			event.preventDefault();
			if(screen_view=="portrait"){
				setTimeout(function(){
					nav_vertical.css('display', 'none');
				},900);				
			}
		
			var nav=$(this).children('a') .text();
			active=$(this).children('.active');
			
			activeActual.stop(true).animate({
				width: '0%',
				left: '100%'
				},500, function() {									
			});
			active.stop(true).animate({			
				width: '90%',
				left: '10%'
				},500, function() {
					if(nav=="Acerca de Mi" && navActual!="Acerca de Mi"){					
						
						hide_sections();					
						about.css('display', 'block');									
						about.stop(true).animate({
							left: anim_left,
							opacity: 1
							},800, function() {
						});
					}
					else if (nav=="CV" && navActual!="CV") {
						hide_sections();
						$("#cv").css('display', 'block');
						$("#cv").stop(true).animate({
							opacity: 1,
							},800, function(){

						});
					}
					else if(nav=="Proyectos" && navActual!="Proyectos"){

						hide_sections();	
						$(".portfolio-background").css('display','block');			
						$(".portfolio-background").stop(true).animate({
							opacity: '1',
							},500, function() {
								
						});
						$(".portfolio").css('display', 'block');
								$(".portfolio").stop(true).animate({
									left: '17%',
									opacity: 1
									},600, function() {
								});
									
					}
					
					else if(nav=="Contacto" && navActual!="Contacto"){
						
						hide_sections();
						$("#contact").css('display', 'block');							
						$("#contact").stop(true).animate({
							top: contact_top,
							},500, function() {
							/* stuff to do after animation is complete */
						});
									
					}
					
					navActual=nav;
			});
			activeActual=$(this).children('.active');
			// active_index=ind;	
		});

	// funcion hover de miniaturas de aplicaciones ******************************************************
		$(".columns-four").hover(function() {
			$(this).children(".thumb-column-background").children(".thumb-column").stop(true).animate({
				opacity: 1,
			},400, function() {
				/* stuff to do after animation is complete */
			});
		}, function() {
			$(this).children(".thumb-column-background").children(".thumb-column").stop(true).animate({
				opacity: 0.4,
			},400, function() {
				/* stuff to do after animation is complete */
			});
		})
	// fin  hover de miniaturas **************************************************************************



	// Funcion menu proyectos	*************************************************************************
		$(".portfolio .nav a").click(function(){
			var section=$(this).data('section');
			$(".columns-four").stop(true).animate({
				opacity: 0,
				},500, function() {					
					$(".columns-four").each(function() {
						if($(this).data('section')==section || section=="All"){
							$(this).css({
								display: 'inline-block',
							});
						}	
						else{
							$(this).css({
								display: 'none',
							});
						}
					});
					
					$(".columns-four").stop(true).animate({
						opacity: 1,
						},500, function() {
							/* stuff to do after animation is complete */
					});
			});		
		});
	// fin funcion menu proyectos ***********************************************************************

	// Evento al escoger aplicacion *********************************************************************
		var app="nothing";
		$(".columns-four").click(function(event) {
			$('.app').css({
				display: 'block',
			});
			app=$(this).data('app');
			$(".effect").css({
				'z-index': '5',
			});
			$(".effect").stop(true).animate({
				opacity: 1,
				// param2: value2
			},600, function() {

					$(".img-group, .app-info").each(function(){
						if($(this).data('app')==app){
							$(this).css({
								display: 'block',
								// property2: 'value2'
							});
							var div_height=$(".app-content").outerHeight();
							var	div_width=$(".app-content").outerWidth();
							$(this).children('.img-center').first().css({
								display: "block"
							});
							$(this).children('.img-center').each(function() {
								$(this).css({
									'margin-left': (div_width - $(this).outerWidth())/2,
									'margin-top': (div_height - $(this).outerHeight())/2
								});
							});
						}
						else{
							$(this).css({
								display: 'none',
							});
						}
					});
						

				$(".app").css({
					left: '0%',
					// display: 'block'
				});
				
				$(".effect").stop(true).animate({
					opacity: 0,
					// param2: value2
				},800, function() {
					$(".effect").css({
						'z-index': '0',
					});
					//Revisar configuracion de orientacion *********************
					if(screen_view=='landscape'){
						$(".app-aside").css({
							top: '0%',
							left: '100%'
						});
						$(".app-aside").animate({
							left: '72%',
							},400, function() {
							/* stuff to do after animation is complete */
						});
					}
					else if(screen_view=='portrait'){
						$(".app-aside").css({
							top: '100%',
							left: '0%'
						});
						$(".app-show-info").stop(true).animate({
							top: '92%',
							},
							400, function() {
							/* stuff to do after animation is complete */
						});
						// $(".app-aside").animate({
						// 	top: '95%',
						// 	},400, function() {
						// });
					}	
					// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
				});
			});
		});
	// fin de evento al escoger aplicacion ***************************************************

	// Botones de vista de aplicaciones ******************************************************
		$("#back").click(function(){		
			$(".img-group").each(function() {
				if($(this).data('app')==app){
					$(this).children('.img-center').stop(true).animate({
						opacity: 0,
						},200, function() {
							$(this).css({
								display: 'none',
								// property2: 'value2'
							});
							
					});

					$(this).children('.img-center').last()
					.css({
						display: 'block',
						// property2: 'value2'
					})
					.stop(true).animate({
						opacity: 1,
						},700, function() {
						/* stuff to do after animation is complete */
					})
					.prependTo($(this));
							
				}
			});
		});

		$("#forward").click(function(){		
			$(".img-group").each(function() {
				if($(this).data('app')==app){
					$(this).children('.img-center').stop(true).animate({
						opacity: 0,
						},200, function() {
							$(this).css({
								display: 'none',
								// property2: 'value2'
							});
							
					});

					$(this).children('.img-center').first().appendTo($(this));
					$(this).children('.img-center').first().css({
						display: 'block',
						// property2: 'value2'
					})
					.stop(true).animate({
						opacity: 1,
						},700, function() {
						/* stuff to do after animation is complete */
					});
								
				}
			});
		});

		$("#close").click(function(){
			$(".app-aside").animate({
				left: '100%',
				},400, function() {
						$(".effect").css({
							'z-index': '10',
						});
						$(".effect").stop(true).animate({
							opacity: 1,
							// param2: value2
							},800, function() {
								$(".app").css({
									left: '100%',
									display: 'none'
								});
								$(".effect").stop(true).animate({
									opacity: 0,
									// param2: value2
									},600,function(){
										$(".effect").css({
											'z-index': '0',
										});
										$(".app-show-info").css('top', '100%');
								});
								

						});	
			});


		});
		$(".signs").hover(function() {
			$(this).children(".sign-background").css({
				'background-color': '#FFA500',
			});
			$(this).children(".sign-background").stop(true).animate({
				'opacity': '1'
				},200, function() {
			});		
		}, function() {
			$(this).children(".sign-background").css({
				'background-color': '#3f3f3f',
			});
			$(this).children(".sign-background").stop(true).animate({
				'opacity': '0.2'
				},200, function() {
			});
		});
	//fin botones vistas aplicaciones **************************************************************
	
	
	$(".app-show-info").click(function() {
		if(info_top=="down"){

			$(".app-aside").css({
				display: 'block'
			}).stop(true).animate({
				top: '0%',
				},500, function() {
				/* stuff to do after animation is complete */
			});
			info_top="up";
		}
		else{
			$(".app-aside").stop(true).animate({
				top: '100%',
				},500, function() {
					$(this).css({
						display: 'none'
					});
			});
			info_top="down";
		}
	});
	
		
});

// Funcion precarga con jquery ************************************************************
	function loader(){
		var alto=$(window).height();
		var ancho=$(window).width();
		$("body").append("<div id='imagen-load'><img src='img/loader.gif' alt=''/></ div>");
        $("#imagen-load").css({"margin-top":(alto/2)-30, "margin-left": (ancho/2)-10, "position": "absolute"}); 
	}
	$(document).ready(function() {
		loader();
	});
	
	$(window).load(function(){ 
		$("#imagen-load").fadeOut(1000,function() { //eliminamos la capa de precarga $(this).remove();
			$(this).remove();
		}); 		
	})

// *************** fin de funcion precarga con jquery ************************************
