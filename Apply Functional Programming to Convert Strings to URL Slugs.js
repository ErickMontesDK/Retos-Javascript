/*Fill in the urlSlug function so it converts a string title and returns the 
hyphenated version for the URL. You can use any of the methods covered in this section, 
and don't use replace. Here are the requirements:
The input is a string with spaces and title-cased words
The output is a string with the spaces between words replaced by a hyphen (-)
The output should be all lower-cased letters
The output should not have any spaces*/

function urlSlug(title) {
	let url=title.split(" ").filter(elem=>elem!="").join("-").toLowerCase();
  
return url
}
console.log(urlSlug(" Winter Is Coming ")); // winter-is-coming
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")); // a-mind-needs-books-like-a-sword-needs-a-whetstone
console.log(urlSlug("Hold The Door")); // hold-the-door 
