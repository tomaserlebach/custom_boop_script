/**
	{
		"api":1,
		"name":"Lines to array of strings",
		"description":"Makes an array of strings.",
		"author":"tomaserlebach",
		"icon":"collapse",
		"tags":"array, list, strings",
		"bias": -0.1
	}
**/

function main(input) {
	input.text = input.text.replace(/^(.*)$/gm, '  \'$1\'');
    input.text = input.text.replace(/\n/g, ',\n');
    input.text = "[\n" + input.text + "\n]";
}