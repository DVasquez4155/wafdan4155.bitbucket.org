function sidebarStart() {
    
    document.getElementById('sidebar').innerHTML += "<center><br><div class='box'><a href='https://www.twitter.com'><img class='icon' src='" + back + "HomelessIcons/twit.svg'/></a><a href='https://www.facebook.com'><img class='icon' src='" + back + "HomelessIcons/fb.svg'/></a></div><div class='box sidebox'><br><p>News related to Homeless</p><br><div id='newsRss'></div><p></p><br></div><div class='box sidebox'></div>";
    
    var userpicture = "HomelessIcons/default.svg";
    
    rssfeed_url = new Array(); 
                        rssfeed_url[0]="https://news.google.de/news/feeds?pz=1&cf=all&ned=EN&hl=US&q=Homeless&output=rss";  
                        rssfeed_frame_width="80%"; 
                        rssfeed_frame_height="500px"; 
                        rssfeed_scroll="on"; 
                        rssfeed_scroll_step="6"; 
                        rssfeed_scroll_bar="off"; 
                        rssfeed_target="_blank"; 
                        rssfeed_font_size="12"; 
                        rssfeed_font_face="sans-serif"; 
                        rssfeed_border="on"; 
                        rssfeed_title="on"; 
                        rssfeed_title_name=""; 
                        rssfeed_title_bgcolor="#fcaf0b"; 
                        rssfeed_title_color="#fff"; 
                        rssfeed_title_bgimage="http://"; 
                        rssfeed_footer="off"; 
                        rssfeed_footer_name="rss feed"; 
                        rssfeed_footer_bgcolor="#fff"; 
                        rssfeed_footer_color="#333"; 
                        rssfeed_footer_bgimage="http://"; 
                        rssfeed_item_title_length="50"; 
                        rssfeed_item_title_color="#666"; 
                        rssfeed_item_bgcolor="#fff"; 
                        rssfeed_item_bgimage="http://"; 
                        rssfeed_item_border_bottom="on"; 
                        rssfeed_item_source_icon="off"; 
                        rssfeed_item_date="off"; 
                        rssfeed_item_description="on"; 
                        rssfeed_item_description_length="120"; 
                        rssfeed_item_description_color="#666"; 
                        rssfeed_item_description_link_color="#333"; 
                        rssfeed_item_description_tag="off"; 
                        rssfeed_no_items="0"; 
                        rssfeed_cache = "872fd004955cd93826972c31b3ceb930";
    window.onload = (function(){var a=window;var b="";for(i=0;i<a.rssfeed_url.length;i++){b=b+"rssfeed[url]["+i+"]="+encodeURIComponent(a.rssfeed_url[i])+"&"}var c="http://feed.surfing-waves.com/php/rssfeed.php"+"?"+b+"rssfeed[type]="+(a.rssfeed_type?a.rssfeed_type:"")+"&rssfeed[frame_width]="+a.rssfeed_frame_width+"&rssfeed[frame_height]="+a.rssfeed_frame_height+"&rssfeed[scroll]="+(a.rssfeed_scroll?a.rssfeed_scroll:"")+"&rssfeed[scroll_step]="+(a.rssfeed_scroll_step?a.rssfeed_scroll_step:"")+"&rssfeed[scroll_bar]="+(a.rssfeed_scroll_bar?a.rssfeed_scroll_bar:"")+"&rssfeed[target]="+(a.rssfeed_target?a.rssfeed_target:"")+"&rssfeed[font_size]="+(a.rssfeed_font_size?a.rssfeed_font_size:"")+"&rssfeed[font_face]="+(a.rssfeed_font_face?a.rssfeed_font_face:"")+"&rssfeed[border]="+(a.rssfeed_border?a.rssfeed_border:"")+"&rssfeed[css_url]="+(a.rssfeed_css_url?encodeURIComponent(a.rssfeed_css_url):"")+"&rssfeed[title]="+(a.rssfeed_title?a.rssfeed_title:"")+"&rssfeed[title_name]="+(a.rssfeed_title_name?encodeURIComponent(a.rssfeed_title_name):"")+"&rssfeed[title_bgcolor]="+(a.rssfeed_title_bgcolor?encodeURIComponent(a.rssfeed_title_bgcolor):"")+"&rssfeed[title_color]="+(a.rssfeed_title_color?encodeURIComponent(a.rssfeed_title_color):"")+"&rssfeed[title_bgimage]="+(a.rssfeed_title_bgimage?encodeURIComponent(a.rssfeed_title_bgimage):"")+"&rssfeed[footer]="+(a.rssfeed_footer?a.rssfeed_footer:"")+"&rssfeed[footer_name]="+(a.rssfeed_footer_name?encodeURIComponent(a.rssfeed_footer_name):"")+"&rssfeed[footer_bgcolor]="+(a.rssfeed_footer_bgcolor?encodeURIComponent(a.rssfeed_footer_bgcolor):"")+"&rssfeed[footer_color]="+(a.rssfeed_footer_color?encodeURIComponent(a.rssfeed_footer_color):"")+"&rssfeed[footer_bgimage]="+(a.rssfeed_footer_bgimage?encodeURIComponent(a.rssfeed_footer_bgimage):"")+"&rssfeed[item_bgcolor]="+(a.rssfeed_item_bgcolor?encodeURIComponent(a.rssfeed_item_bgcolor):"")+"&rssfeed[item_bgimage]="+(a.rssfeed_item_bgimage?encodeURIComponent(a.rssfeed_item_bgimage):"")+"&rssfeed[item_title_length]="+(a.rssfeed_item_title_length?a.rssfeed_item_title_length:"")+"&rssfeed[item_title_color]="+(a.rssfeed_item_title_color?encodeURIComponent(a.rssfeed_item_title_color):"")+"&rssfeed[item_border_bottom]="+(a.rssfeed_item_border_bottom?a.rssfeed_item_border_bottom:"")+"&rssfeed[item_source_icon]="+(a.rssfeed_item_source_icon?a.rssfeed_item_source_icon:"")+"&rssfeed[item_date]="+(a.rssfeed_item_date?a.rssfeed_item_date:"")+"&rssfeed[item_description]="+(a.rssfeed_item_description?a.rssfeed_item_description:"")+"&rssfeed[item_description_length]="+(a.rssfeed_item_description_length?a.rssfeed_item_description_length:"")+"&rssfeed[item_description_color]="+(a.rssfeed_item_description_color?encodeURIComponent(a.rssfeed_item_description_color):"")+"&rssfeed[item_description_link_color]="+(a.rssfeed_item_description_link_color?encodeURIComponent(a.rssfeed_item_description_link_color):"")+"&rssfeed[item_description_tag]="+(a.rssfeed_item_description_tag?a.rssfeed_item_description_tag:"")+"&rssfeed[no_items]="+(a.rssfeed_no_items?a.rssfeed_no_items:"")+"&rssfeed[cache]="+(a.rssfeed_cache?a.rssfeed_cache:"");if(a.rssfeed_border!="off"&&!a.rssfeed_css_url){}document.getElementById('newsRss').innerHTML = '<iframe name="rssfeed_frame" width="'+a.rssfeed_frame_width+'" height="'+a.rssfeed_frame_height+'" frameborder="0" src="'+c+'" marginwidth="0" marginheight="0" vspace="0" hspace="0" scrolling="no" ALLOWTRANSPARENCY="true"></iframe>'})()

}