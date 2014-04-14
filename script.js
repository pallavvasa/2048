globmat = [[0,4,16,512],[0,0,8,128],[0,2,0,8],[0,0,0,2]];
weighmat = [[1,512,729,40960000000],[8,343,1000,33750000],[27,216,1331,274400],[64,125,1728,21970]];
high = 0;
function moves(dir,clone) {
	
	if(clone) {
		mat = globmat.slice(0);
		for(var i=0;i<4;i++)
			mat[i] = globmat[i].slice(0);
	} else mat = globmat;
	
	ind = [[0,0],[0,0],[0,0],[0,0]];
	r = 0; c = 0;
	switch(dir) {
		case 1:
			ind[0] = [0,0];
			ind[1] = [1,0];
			ind[2] = [2,0];
			ind[3] = [3,0];
			c = 1;
			break;
		case 2:
			ind[0] = [0,3];
			ind[1] = [0,2];
			ind[2] = [0,1];
			ind[3] = [0,0];
			r = 1;
			break;
		case 3:
			ind[0] = [3,3];
			ind[1] = [2,3];
			ind[2] = [1,3];
			ind[3] = [0,3];
			c = -1;
			break;
		case 4:
			ind[0] = [3,0];
			ind[1] = [3,1];
			ind[2] = [3,2];
			ind[3] = [3,3];
			r = -1;
			break;
	}
	for(var j=0;j<4;j++) {
		for(var tmp1=0,tmp2=1;tmp2<4;tmp2++) {
			if(mat[ind[tmp2][0]][ind[tmp2][1]] != 0) {
				if(mat[ind[tmp1][0]][ind[tmp1][1]] == 0) {
					mat[ind[tmp1][0]][ind[tmp1][1]] = mat[ind[tmp2][0]][ind[tmp2][1]];
					mat[ind[tmp2][0]][ind[tmp2][1]] = 0;
				} else {
					if(mat[ind[tmp2][0]][ind[tmp2][1]] == mat[ind[tmp1][0]][ind[tmp1][1]]) {
						mat[ind[tmp1][0]][ind[tmp1][1]] = mat[ind[tmp1][0]][ind[tmp1][1]] + mat[ind[tmp2][0]][ind[tmp2][1]];
						mat[ind[tmp2][0]][ind[tmp2][1]] = 0;
					} else
						if(tmp2>tmp1+1)
							tmp2--;
					tmp1++;
				}
			}
		}
		for(var i=0;i<4;i++) {
			ind[i][0] = ind[i][0] + r;
			ind[i][1] = ind[i][1] + c;
		}
	}
	if(clone)
		return mat;
}
function getWeight(dir,curr) {
	weight = 0;
	wmat = [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]];
	if(!curr)
		mat = moves(dir,true);
	else
		mat = globmat;
	for(var c=3;c>=0;c--) {
		if(c==3 || c==1) {
			for(var r=0;r<4;r++){
				if(r!=3 && mat[r][c]!=0 && mat[r][c]>=mat[r+1][c])
					wmat[r+1][c]=wmat[r+1][c]*calcWt(mat[r][c],mat[r+1][c]);
				if(mat[r][c]!=0 && mat[r][c]>=mat[r][c-1])
					wmat[r][c-1]=wmat[r][c-1]*calcWt(mat[r][c],mat[r][c-1]);
			}
		} else {
			for(var r=3;r>=0;r--){
				if(r!=0 && mat[r][c]!=0 && mat[r][c]>=mat[r-1][c])
					wmat[r-1][c]=wmat[r-1][c]*calcWt(mat[r][c],mat[r-1][c]);
				if(c!=0 && mat[r][c]!=0 && mat[r][c]>=mat[r][c-1])
					wmat[r][c-1]=wmat[r][c-1]*calcWt(mat[r][c],mat[r][c-1]);
			}
		}
	}
	for(var i=0;i<4;i++)
		for(var j=0;j<4;j++)
			weight = weight + (Math.pow(mat[i][j],3) * weighmat[i][j] * wmat[i][j]);
	return weight;
}
function updateMat() {
	globmat = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	high = 0;
	for(var i=0;i<4;i++)
		for(var j=0;j<4;j++) {
			elem = document.getElementsByClassName('tile-position-'+(j+1)+'-'+(i+1));
			len = elem.length;
			if(len>0) {
				globmat[i][j] = parseInt(elem[len-1].childNodes[0].childNodes[0].nodeValue);
				high = Math.max(high,globmat[i][j]);
			}
		}
}
function solve() {
	var map = {
		1: 38, // Up
		2: 39, // Right
		3: 40, // Down
		4: 37 // Left
	};

	cwt = 0;
	updateMat();
	cwt = getWeight(0,true);
	for(var i=1,mw=0;i<5;i++) {
		wtmp = getWeight(i);
		if(wtmp!=cwt && mw<wtmp) {
			dir = i;
			mw = wtmp;
		}
	}
	mapped = map[dir];
	// return dir;
	fireEvent(mapped);
	setTimeout(solve,100);
}
function fireEvent(dir) {
	evt = document.createEvent("KeyboardEvent");
	evt.initKeyboardEvent("keydown", true, true, window, false, false, false, false, false, false, 38, 38);
	Object.defineProperty(evt, 'which', { get: function() {return dir;} });
	document.body.dispatchEvent(evt);
}
function calcWt(a,b) {
	return Math.pow(1024,1/(1+Math.log(a/b)/Math.log(2)));
}
solve();
