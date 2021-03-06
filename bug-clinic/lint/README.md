## Disinfect

Sometimes it's the simplest things that trip you up. Since JavaScript
is so flexible, many things you *can* do are also things you
*shouldn't* do. Computers are good at spotting things we can't see, so
code linters like jshint can identify issues that would otherwise go
unnoticed.

## CHALLENGE

Install jshint (`npm install --global jshint` – maybe with sudo on
Linux, probably logged in as an administrator on Windows) and use it
to figure out and fix what's wrong with this program (which has the
filename <filename.js> below):

    today = 'today';

    console.log('date is', timestamp());
    console.log('today is', today);

    function timestamp() {
      today = Date();
      return today;
    }

You can start with this config file for jshint:

    {
        "node": true,
        "undef": true
    }

Put it in a file named jshintrc, and then run jshint with
`jshint --config jshintrc <filename.js>`

BONUS:

eslint is slightly more stringent than jshint. Depending on your
solution, there may still be some questionable code lurking in your
solution. Install eslint (`npm -g i eslint`, same caveats as above)
against your fixed program and see if it picks up anything else.
Here's a good starter config file for eslint (again, stick it in
`eslintrc` and then use it with `eslint --config eslintrc <filename.js>`):

    {
        "env" : {
            "node" : true
        },
        "rules" : {
            "strict" : 0
        }
    }

To run or test your bonus solution, run:

    `bug-clinic run bonus <filename.js>` or
    `bug-clinic verify bonus <filename.js>`
