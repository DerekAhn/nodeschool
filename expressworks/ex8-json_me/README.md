#####################################################################
##                         ~~  JSON ME  ~~                         ##
#####################################################################

Write a server that reads a file (file name is passed in process.argv[3]), parses it to JSON and outputs the content to the user with res.json(object). Everything should match to the 'books' resource.


HINTS

For reading, there's an fs module, e.g.,

  fs.readFile(filename, callback)

While the parsing can be done with JSON.parse:

  object = JSON.parse(string)


 » To print these instructions again, run: `expressworks print`.
 » To execute your program in a test environment, run:
   `expressworks run program.js`.
 » To verify your program, run: `expressworks verify program.js`.
 » For help with this problem or with expressworks, run:
   `expressworks help`.