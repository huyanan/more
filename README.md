More
====

See More(查看更多)

## Install

git clone https://github.com/huyanan/more.git

## Useage

 more(wrap,item,max,toggleButton);
 Like more($('.wrap'),'.item',6,null);

## Params

### Wrap
1. Type: jQuery Element or selector
2. Describe: Container selector or jQuery Elements.
3. Like: $('#oneTable') or '.bootTable'

### Item
1. Type: selector
2. Describe: The content of the selector.
3. Like: 'tr' or 'tbody tr' or '.views-row'

### Max
1. Type: Number
2. Describe: The Number of how many Elements you want to visible
3. Like: 6

### ToggleButton
default $('<button class="lookmore compress btn">See More</button>');
1. Type: jQuery Elements
2. Describe: Button for folding content
3. Like: $('<button class="myclass">See More</button>')

## Button Style
`
/**
 * Normal Button styles
 **/
.btn{
  
}
/**
 * See More Button styles
 **/
.lookmore{
 //background-color:blue;
}
/**
 * Button styles on compress
 **/
.lookmore.compress{
 background-image:url(compress.jpg);
}
/**
 * Button styles on expand
 **/
.lookmore.expand{
 background-image:url(expand.jpg);
}
`
If you pass the toggleButton,please change styles with you className;

## Run the demo

You need a server like APACHE
Please visit the Url
http://localhost/more/demo/more.html

## TODO

1. Use the [jquery - boilerplate](https://github.com/jquery-boilerplate) refactoring plug-in

## License

[MIT License](http://zenorocha.mit-license.org/) © Zeno Rocha
