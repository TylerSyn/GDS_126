var x=false;
var caveData ={
	info:{
		layout:[
			[0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,2],
			[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
			[2,x,x,7,x,x,7,x,x,x,x,x,x,7,7,x,7,7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
			[6,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
			[5,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
			[7,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
			
			
		],
		src:`images/tilesheet saloon copy.png`,
	},
	states:
	[		
			{
				fps:5,
				cycle:false,
				frames:[
					{width:256, height:256, startX:0, startY:0}
				]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:256, height:256, startX:256, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:256, height:256, startX:256*2, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:256, height:256, startX:256*3, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:256, height:256, startX:256*4, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:256, height:256, startX:256*5, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:256, height:256, startX:256*6, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:256, height:256, startX:256*7, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:256, height:256, startX:256*8, startY:0}]
			}
		]
	}
	var caveBackData ={
		info:{
			layout:[
			[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[x,8,8,8,8,3,3,3,3,3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[3,8,8,8,8,3,x,x,x,3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[3,8,8,8,8,3,3,3,3,3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			[3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
			],
			src:`images/tilesheet saloon copy.png`,
		},
		states:caveData.states
		}

		var caveHitData={
			info:{
				layout:[
					[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2],
					[2,8,1,8,1,1,8,1,1,1,1,1,1,8,8,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
					[2,x,x,8,x,x,8,x,x,x,x,x,x,8,8,x,1,1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[6,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2]
					
					
				],
				src:`images/tilesheet saloon copy.png`,
			},
			states:caveData.states
			
			}