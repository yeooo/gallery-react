require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
// let yeomanImage = require('../images/yeoman.png');

// class AppComponent extends React.Component {
//   render() {
//     return (
//       <div className="index">
//         <img src={yeomanImage} alt="Yeoman Generator" />
//         <div>hello world!!!</div>
//         <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
//       </div>
//     );
//   }
// }


//获取图片相关数据
let imagesDatas = require('../data/imageDatas.json');

//利用自执行函数，将图片信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr) {
	for (var i = 0; i < imageDatasArr.length; i < j; i++) {
		let singleImageData = imageDatasArr[i];

		singleImageData.imageURL = require('../images/' + singleImageData.fileName);
		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas);

// imageDatas = genImageURL(imageDatas)

class AppComponent extends React.Component {
	render() {
		return (
			<section className = "stage">
				<section className="img-sec">
				</section>
				<nav className="controller-nav">
				</nav>
			</section>
		)
	}
}


AppComponent.defaultProps = {};

export default AppComponent;