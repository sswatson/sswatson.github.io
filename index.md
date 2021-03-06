@def title = "Home"

# Samuel S. Watson

I am the Director of Graduate Studies in the [Data Science Initiative](https://www.brown.edu/initiatives/data-science/) at Brown University. 

I am a [mathematician by training](/research/) and an educational technologist at heart. Most of my work is aimed at making mathematical and statistical ideas accessible and fun. I teach [DATA 1010](https://data1010.github.io) at Brown and develop [Prismia](https://prismia.chat) and [Data Gymnasia](https://mathigon.org/data-gymnasia). 

If you're interested in checking out these technologies, I recommend the Prismia lesson [*Machine Learning with Mathlets*](https://prismia.chat/shared/ml-with-mathlets) as a starting point. In that lesson, you'll work up an exploration involving this interactive figure (which illustrates a *neural network*):

{{ jcstart 650 80 50}}
~~~
$board.setView([-0.7, 3.5, 9.7, -2.9]);

weightText = text(7, 2.8, '') <<fontSize: 18, anchorX: 'middle', visible: false>>;

W1 = [[0.590558, -0.601982],
      [ 0.456136, 0.624738],
      [ 0.014964, -0.0984904]];

W1 = [[-0.601982, 0.590558],
      [0.624738, 0.456136],
      [-0.0984904, 0.014964]];

b1 = [0.2060344, -0.45843987, -0.011948588];

W2 = [[0.524019, 0.698517, 0.0776159],
      [-0.503448, -0.663572, 0.0910801]];
       
b2 =  [-0.15602404, 0.15596834];

button(0.5, 1.2, 'show best', function() {
  retset = $('weight100').setValue(W1[0][0]);
  retset = $('weight101').setValue(W1[1][0]);
  retset = $('weight102').setValue(W1[2][0]);
  retset = $('weight110').setValue(W1[0][1]);
  retset = $('weight111').setValue(W1[1][1]);
  retset = $('weight112').setValue(W1[2][1]);
  retset = $('bias10').setValue(b1[0]);
  retset = $('bias11').setValue(b1[1]);
  retset = $('bias12').setValue(b1[2]);
  retset = $('weight200').setValue(W2[0][0]);
  retset = $('weight210').setValue(W2[0][1]);
  retset = $('weight220').setValue(W2[0][2]);
  retset = $('weight201').setValue(W2[1][0]);
  retset = $('weight211').setValue(W2[1][1]);
  retset = $('weight221').setValue(W2[1][2]);
  retset = $('bias20').setValue(b2[0]);
  retset = $('bias21').setValue(b2[1]);
}) <<anchorX: 'middle', anchorY: 'bottom'>>;

curve([0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0]) <<strokeColor: 'gray'>>;
      
curve(function(t) {return 0.5*cos(t);},
      function(t) {return 0.5 + 0.5*sin(t);}, 
      -PI/2, PI/2) <<strokeColor: 'gray'>>;

input = [0.2, 0.3];

point(0.2, 0.3) <<id: 'outline', size: 3.5, strokeOpacity: 0.1, withLabel: false, layer: 10>>;

point(input[0], input[1]) <<id: 'lastpoint', visible: false, color: 'gold', size: 1, strokeOpacity: 0, withLabel: false>>;

button(0.5, -0.2, 'new point', function () {
  x1 = random();
  x2 = random();
  $('lastpoint').visible = true;
  $('lastpoint').id = random();
  p = point(x1, x2);
  p.withLabel = false;
  p.strokeOpacity = 0;
  p.size = 1;
  if (x1^2 + (x2-0.5)^2 < 0.25) {
    p.color = 'gold';
  } else {
    p.color = '#966FD6';
  };
  p.visible = true;
  p.id = 'lastpoint';
  moveresult = $('neurons0').moveTo([x1, x2]);
  moveresult = $('outline').moveTo([x1, x2]);
}) <<anchorX: 'middle', anchorY: 'top'>>;

tr_x = 2.0;
tr_y = -1.5;

for (i = 0; i < 2; i = i + 1) {
  point(tr_x, 2*i + 1 + tr_y) <<id: 'layer1' + i, withLabel: false, fillColor: 'white', size: 24, fixed: true, strokeColor: '#333', strokeWidth: 1>>;
}

setDragText = function(name, i, j) {
  setresult = $((name + i) + j).on('over', function() {
    weightText.visible = true;
    weightText.setText(V($((name + i) + j)));
  });
  setresult = $((name + i) + j).on('drag', function() {
    weightText.setText(V($((name + i) + j)));
  });
  setresult = $((name + i) + j).on('out', function() {
    weightText.visible = false;
  });
};

for (i = 0; i < 3; i = i + 1) {
  point(3 + tr_x, 2*i + tr_y) <<id: 'layer2' + i, withLabel: false, fillColor: 'white', size: 24, fixed: true, strokeColor: '#333', strokeWidth: 1>>;
  slider([2.5 + tr_x, 2*i-0.7 + tr_y], [3.5+tr_x, 2*i-0.7+tr_y], [-2, 0, 2]) <<id: 'bias1' + i, withLabel: false, color: '#6495ED', ticks: <<visible: false>>>>;
  setDragText('bias1', i, '');
}

for (i = 0; i < 2; i = i + 1) {
  point(6 + tr_x, 2*i+1 + tr_y) <<id: 'layer3' + i, withLabel: false, color: 'white', size: 24, fixed: true, strokeColor: '#333', strokeWidth: 1>>;
  slider([5.5 + tr_x, 2*i+1-0.7 + tr_y], [6.5 + tr_x, 2*i+1-0.7 + tr_y], [-2, 0, 2]) <<id: 'bias2' + i, withLabel: false, color: '#6495ED', ticks: <<visible: false>>>>;
  setDragText('bias2', i, '');
}

for (i = 0; i < 2; i = i + 1) {
  for (j = 0; j < 3; j = j + 1) {
    s = slider([$('layer1' + i).X(), $('layer1' + i).Y()], 
           [$('layer2' + j).X(), $('layer2' + j).Y()], 
           [-2, 0.2, 2]) <<id: ('weight1' + i) + j, withLabel: false, color: '#3CB371', ticks: <<majorHeight: 10, visible: false>>>>;
    setDragText('weight1', i, j);
    slider([$('layer2' + j).X(), $('layer2' + j).Y()], 
           [$('layer3' + i).X(), $('layer3' + i).Y()], 
           [-2, 0.2, 2]) <<id: ('weight2' + j) + i, withLabel: false, color: '#3CB371', ticks: <<visible: false>>>>;
    setDragText('weight2', j, i);
  }
}

relu = function(x) {
  if (x < 0) {
    return 0;
  } else {
    return x;
  }
};

point(function() {return $('outline').X();}, function() {return $('outline').Y();}) <<id: 'neurons0', visible: false>>;

text(tr_x, 3 + tr_y, function() {return round(1000*$('neurons0').X())/1000;}) <<anchorX: 'middle', anchorY: 'middle', fixed: true>>;
text(tr_x, 1 + tr_y, function() {return round(1000*$('neurons0').Y())/1000;}) <<anchorX: 'middle', anchorY: 'middle', fixed: true>>;

point(function() {return relu($('weight100')*$('neurons0').Y() + $('weight110')*$('neurons0').X() + $('bias10'));}, 0) <<id: 'neuron10', visible: false>>;
text(3 + tr_x, tr_y, function() {return round(1000*$('neuron10').X())/1000;}) <<anchorX: 'middle', anchorY: 'middle', fixed: true>>;

point(function() {return relu($('weight101')*$('neurons0').Y() + $('weight111')*$('neurons0').X() + $('bias11'));}, 0) <<id: 'neuron11', visible: false>>;
text(3 + tr_x, 2+tr_y, function() {return round(1000*$('neuron11').X())/1000;}) <<anchorX: 'middle', anchorY: 'middle', fixed: true>>;

point(function() {return relu($('weight102')*$('neurons0').Y() + $('weight112')*$('neurons0').X() + $('bias12'));}, 0) <<id: 'neuron12', visible: false>>;
text(3 + tr_x, 4 + tr_y, function() {return round(1000*$('neuron12').X())/1000;}) <<anchorX: 'middle', anchorY: 'middle', fixed: true>>;

point(function() {return ($('weight200')*$('neuron10').X() + $('weight210')*$('neuron11').X() + $('weight220')*$('neuron12').X()  + $('bias20'));}, 0) <<id: 'neuron20', visible: false>>;
text(6 + tr_x, 1 + tr_y, function() {return round(1000*$('neuron20').X())/1000;}) <<anchorX: 'middle', anchorY: 'middle', fixed: true>>;

point(function() {return $('weight201')*$('neuron10').X() + $('weight211')*$('neuron11').X() + $('weight221')*$('neuron12').X() +  + $('bias21');}, 0) <<id: 'neuron21', visible: false>>;
text(6 + tr_x, 3 + tr_y, function() {return round(1000*$('neuron21').X())/1000;}) <<anchorX: 'middle', anchorY: 'middle', fixed: true>>;

$('outline').color = function() {
  if ($('neuron20').X() < $('neuron21').Y() ) {
    return 'gold';
  } else {
    return '#966FD6';
  }
};
$('outline').highlightFillColor = function() {
  if ($('neuron20').X() < $('neuron21').Y() ) {
    return 'gold';
  } else {
    return '#966FD6';
  }
};

point(function() {
  cc = 10;
  return exp(cc*$('neuron20').X()) / (exp(cc*$('neuron20').X())  + exp(cc*$('neuron21').X()));
}, function() {
  cc = 10;
  return exp(cc*$('neuron21').X()) / (exp(cc*$('neuron20').X())  + exp(cc*$('neuron21').X()));
}) <<visible: false, id: 'softmax'>>;


point(6 + tr_x, 2*0+1 + tr_y) <<id: 'layer3' + i, withLabel: false, color: 'purple', fillOpacity: function() {return 0.35*$('softmax').X();}, size: 24, fixed: true>>;
point(6 + tr_x, 2*1+1 + tr_y) <<id: 'layer3' + i, withLabel: false, color: 'gold', fillOpacity: function() {return 0.5*$('softmax').Y();}, size: 24, fixed: true>>;

cs = 0.3;

circle([tr_x, 3 + tr_y], function() {return 0.4 + cs*abs($('neurons0').X());}) <<withLabel: false, color: '#6495ED', fixed: true>>;
circle([tr_x, 1 + tr_y], function() {return 0.4 + cs*abs($('neurons0').Y());}) <<withLabel: false, color: '#6495ED', fixed: true>>;

circle([3 + tr_x, 0 + tr_y], function() {return 0.4 + cs*abs($('neuron10').X());}) <<withLabel: false, color: '#6495ED', fixed: true>>;
circle([3 + tr_x, 2 + tr_y], function() {return 0.4 + cs*abs($('neuron11').X());}) <<withLabel: false, color: '#6495ED', fixed: true>>;
circle([3 + tr_x, 4 + tr_y], function() {return 0.4 + cs*abs($('neuron12').X());}) <<withLabel: false, color: '#6495ED', fixed: true>>;

circle([6 + tr_x, 1 + tr_y], function() {return 0.4 + cs*abs($('neuron20').X());}) <<withLabel: false, color: function() {
  if ($('neuron20').X() < 0 ) {
    return '#FFCCCB';
  } else {
    return '#6495ED';
  }
}, fixed: true>>;
circle([6 + tr_x, 3 + tr_y], function() {return 0.4 + cs*abs($('neuron21').X());}) <<withLabel: false, color: function() {
  if ($('neuron21').X() < 0 ) {
    return '#FFCCCB';
  } else {
    return '#6495ED';
  }
}, fixed: true>>;

handadjust = 0.1;
handheight = 1.7;

text(8.75, handheight - 2.25 - handadjust, '????') <<fontSize: 28, anchorY: 'middle', visible: function() {
  return ($('neurons0').X()^2 + ($('neurons0').Y()-0.5)^2 < 0.25) && $('neuron20').X() > $('neuron21').X();
}>>;
text(8.75, handheight + 0.17 - handadjust, '????') <<fontSize: 28, anchorY: 'middle', visible: function() {
  return ($('neurons0').X()^2 + ($('neurons0').Y()-0.5)^2 > 0.25) && $('neuron20').X() < $('neuron21').X();
}>>;
text(8.75, handheight - 1.85 + handadjust, '????') <<fontSize: 28, anchorY: 'middle', visible: function() {
  return ($('neurons0').X()^2 + ($('neurons0').Y()-0.5)^2 > 0.25) && $('neuron20').X() > $('neuron21').X();
}>>;
text(8.75, handheight + 0.17 + handadjust, '????') <<fontSize: 28, anchorY: 'middle', visible: function() {
  return ($('neurons0').X()^2 + ($('neurons0').Y()-0.5)^2 < 0.25) && $('neuron20').X() < $('neuron21').X();
}>>;
~~~
{{ jcend }}