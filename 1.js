String.format = function() {
      var s = arguments[0];
      for (var i = 0; i < arguments.length - 1; i++) {       
          var reg = new RegExp("\\{" + i + "\\}", "gm");             
          s = s.replace(reg, arguments[i + 1]);
      }
      return s;
  }
 var format_input = String.format('Hello {0} {1}', 'Arkademian', 'Fighters!');
 var format_input2 = String.format('This is an {2}','Halangan','Rintangan','Exercise');

 console.log(format_input)
 console.log(format_input2)