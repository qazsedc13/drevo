
 		function tocSetToggle(close) {
				var tocOpen = "Этот перечень будет открыт всегда после выбора любой ссылки. Щёлкните для изменения.";
				var tocClose = "Этот перечень закроется после выбора любой ссылки. Щёлкните для изменения."
				var toggle = document.images["tocStateButton"];
				toggle.src = (close ? "images/toc_close.gif" : "images/toc_open.gif");
				toggle.alt =  (close ? tocClose : tocOpen);
				toggle.title =  (close ? tocClose : tocOpen);
		}

		function tocToggle() {
				 var close = $.cookie('tocStateToggle') == 'Close';
				 $.cookie('tocStateToggle', (close ? 'Open' : 'Close'));
				 tocSetToggle(!close);
		}
		function doResize() {
                 document.getElementById('toc').style.height = parseInt(getInnerHeight() - 110) + 'px';
        };
        $(function () {
					var match,
						pl     = /\+/g,  // Regex for replacing addition symbol with a space
						search = /([^&=]+)=?([^&]*)/g,
						decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
						query  = window.location.search.substring(1);

					var urlParams = {};
					while (match = search.exec(query))
					   urlParams[decode(match[1])] = decode(match[2]);
					if ('open' in urlParams) explorerTreeOpenTo(window, "names",urlParams['open'], 0, 1, "2");
					$.cookie('mytop',mytop);
					tocSetToggle($.cookie('tocStateToggle') == 'Close');
					hidePopUpFrame();
					PageInit(true, '','names');
					doResize();
					window.onresize=doResize;
				});
