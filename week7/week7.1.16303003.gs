'reinit'
'enable print F:\scripts\grads\week7\week7.1.16303003.gmf'
'sdfopen F:\data\grads\uwnd.levs.monthly.ERAINT.nc'
'set grads off'
'set grid off'
'set lon 0 180'
'set lat 0 40'
'set lev 925'
'set t 7'
********************************
'set gxout contour'
'set mproj nps'
'set mpdest mres'
'set map 2 4 4'
'set frame circle'
'cbar_l -x 4.5 -y 4.5 -n 1 -t U-wind'
'd u'
'print'
'c'
********************************
'set gxout contour'
'set mproj latlon'
'set mpdest lowres'
'set map 8 1 5'
'd u'
'print'
'c'
********************************
'set gxout contour'
'set mproj scaled'
'set mpdest lowres'
'set map 15 2 6'
'd u'
'print'
'c'
********************************
'set gxout contour'
'set mproj robinson'
'set mpdest hires'
'set map 3 3 3 '
'cbar_l -x 4.5 -y 4.0 -n 1 -t V-wind'
'd u'
'print'
'c'
'disable print'
'quit'