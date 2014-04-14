2048
====

Let your browser solve 2048 for you!

Open the webpage http://gabrielecirulli.github.io/2048/ (in chrome only!)

On the adress bar type:  javascript:

and paste the following script (make sure you have opened the raw version of this file).

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('k=[[0,4,16,M],[0,0,8,T],[0,2,0,8],[0,0,0,2]];P=[[1,M,1c,U],[8,Y,11,12],[14,15,1a,1b],[S,1e,1f,1i]];x=0;l J(a,b){e(b){7=k.H(0);g(f i=0;i<4;i++)7[i]=k[i].H(0)}n 7=k;6=[[0,0],[0,0],[0,0],[0,0]];r=0;c=0;1d(a){t 1:6[0]=[0,0];6[1]=[1,0];6[2]=[2,0];6[3]=[3,0];c=1;q;t 2:6[0]=[0,3];6[1]=[0,2];6[2]=[0,1];6[3]=[0,0];r=1;q;t 3:6[0]=[3,3];6[1]=[2,3];6[2]=[1,3];6[3]=[0,3];c=-1;q;t 4:6[0]=[3,0];6[1]=[3,1];6[2]=[3,2];6[3]=[3,3];r=-1;q}g(f j=0;j<4;j++){g(f d=0,9=1;9<4;9++){e(7[6[9][0]][6[9][1]]!=0){e(7[6[d][0]][6[d][1]]==0){7[6[d][0]][6[d][1]]=7[6[9][0]][6[9][1]];7[6[9][0]][6[9][1]]=0}n{e(7[6[9][0]][6[9][1]]==7[6[d][0]][6[d][1]]){7[6[d][0]][6[d][1]]=7[6[d][0]][6[d][1]]+7[6[9][0]][6[9][1]];7[6[9][0]][6[9][1]]=0}n e(9>d+1)9--;d++}}}g(f i=0;i<4;i++){6[i][0]=6[i][0]+r;6[i][1]=6[i][1]+c}}e(b)u 7}l D(a,b){v=0;h=[[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]];e(!b)7=J(a,w);n 7=k;g(f c=3;c>=0;c--){e(c==3||c==1){g(f r=0;r<4;r++){e(r!=3&&7[r][c]!=0&&7[r][c]>=7[r+1][c])h[r+1][c]=h[r+1][c]*o(7[r][c],7[r+1][c]);e(7[r][c]!=0&&7[r][c]>=7[r][c-1])h[r][c-1]=h[r][c-1]*o(7[r][c],7[r][c-1])}}n{g(f r=3;r>=0;r--){e(r!=0&&7[r][c]!=0&&7[r][c]>=7[r-1][c])h[r-1][c]=h[r-1][c]*o(7[r][c],7[r-1][c]);e(c!=0&&7[r][c]!=0&&7[r][c]>=7[r][c-1])h[r][c-1]=h[r][c-1]*o(7[r][c],7[r][c-1])}}}g(f i=0;i<4;i++)g(f j=0;j<4;j++)v=v+(p.R(7[i][j],3)*P[i][j]*h[i][j]);u v}l Q(){k=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];x=0;g(f i=0;i<4;i++)g(f j=0;j<4;j++){G=F.V(\'W-X-\'+(j+1)+\'-\'+(i+1));E=G.Z;e(E>0){k[i][j]=10(G[E-1].K[0].K[0].1v);x=p.13(x,k[i][j])}}}l C(){f a={1:B,2:17,3:18,4:19};A=0;Q();A=D(0,w);g(f i=1,z=0;i<5;i++){s=D(i);e(s!=A&&z<s){I=i;z=s}}O=a[I];N(O);1g(C,1h)}l N(a){y=F.1j("1k");y.1l("1m",w,w,1n,m,m,m,m,m,m,B,B);1o.1p(y,\'1q\',{1r:l(){u a}});F.1s.1t(y)}l o(a,b){u p.R(1u,1/(1+p.L(a/b)/p.L(2)))}C();',62,94,'||||||ind|mat||tmp2|||||if|var|for|wmat|||globmat|function|false|else|calcWt|Math|break||wtmp|case|return|weight|true|high|evt|mw|cwt|38|solve|getWeight|len|document|elem|slice|dir|moves|childNodes|log|512|fireEvent|mapped|weighmat|updateMat|pow|64|128|40960000000|getElementsByClassName|tile|position|343|length|parseInt|1000|33750000|max|27|216||39|40|37|1331|274400|729|switch|125|1728|setTimeout|100|21970|createEvent|KeyboardEvent|initKeyboardEvent|keydown|window|Object|defineProperty|which|get|body|dispatchEvent|1024|nodeValue'.split('|'),0,{}))

and enjoy!

PS: Works generally 1 in 3 times
