import * as d3 from 'd3';

var svg = d3.select('body').append('svg').attr({
    height: 700,
    width: 700
});

function degToRad(deg:number){
    return deg * (Math.PI/180);
}

var data = [1,1,1,1,1, 1];
let startAngle = degToRad(270);
let endAngle = degToRad(450);
let width = 700;
let height = 700;
let padAngle = degToRad(5);
var pie = d3.layout.pie().startAngle(startAngle).endAngle(endAngle).padAngle(padAngle);
var arc = d3.svg.arc().outerRadius(d=>d.outerRadius).innerRadius(d=>d.innerRadius).startAngle(d=>d.startAngle).endAngle(d=>d.endAngle).padAngle(d=>d.padAngle);
var arcs = pie(data).map(d=> {
    let temp:any = {};
    temp.innerRadius = 170;
    temp.outerRadius = 200;
    temp.startAngle = d.startAngle;
    temp.endAngle = d.endAngle;
    temp.padAngle = d.padAngle;
    return temp;
});



let chart = svg.append('g').attr('transform', `translate(${(width) / 2}, ${(height) / 2})`);

chart.selectAll('path').data(arcs)
.enter().append("path")
.attr("d", arc)