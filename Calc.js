const { sub, sum } = require("./Basic");

function add(a,b)
{
    return a+b;
}

function minus(a,b)
{
    return a-b;
}

module.exports = 
{
   sub : add,
   sum : minus

}