---
title: Regular Expression Generator
category: Basic Generators
order: 10
---
# Regular Expression Generator
The Regular Expression Generator generates data based on a regular expression.

The dialog box of the Regular Expression Generator contains Basic Settings and custom settings. You can customize the generator by changing the basic and custom settings.

## Custom Settings 

**Insert snippet**

Select a snippet to be inserted into the expression.

**Insert counter**

Select a counter to be inserted into the expression.

**Insert file**

Select a file to be inserted into the expression.

**Insert column**

Select a column to be inserted into the expression.

**Insert generator**

Select a generator to be inserted into the expression.

Below are the tables of syntax elements.

### Basic:

| Description | Usage | Generates (examples) |
| --- | --- | --- |
| ordinary chars | John | "John" |
| individual chars | [dB] | "d" or "B" |
| [star-end] range | [0-9] | "2" or "5" |
| [chars] character set | [a-z0-9] | "7" or "q" |
| [exclude chars] character set | [^B-E] | "A" or "D" |
| initial ] in char set | []] | "]" |
| (regexp) grouping | (xwz)*y | "xwzxwzy" or "y" |
| * zero or more | xwz* | "xwzzzz" or "zw" |
| +1 or more | xwz+ | "xwzzzz" or "xwz" |
| ? include or not | xwz? | "xw" or "xwz" |
| {num} repeat | z{4} | "zzzz" |
| {min,} at least min repeats | z{4,} | "zzzz" or "zzzzzzzzzz" |
| {,max} not more than max repeats | z{,4} | "zz" or "zzzz" |
| {min, max} repeat | z{3,4} | "zzz" or "zzzz" |
| () | empty string |  |
| ``|`` alternatives | True``|``False | "True" or "False" |
| empty alternative | (``|``dark``|``light)gray | "darkgray" or "gray" |
| numeric counter | ${counter([0-9]{4}) or ${counter(\d{4})} } | 0000, 0001, 0002, ..., 9997, 9998, 9999 |
| numeric counter decrement order | ${counter([9876543210]{4}) | 9999, 9998, 9997, ..., 0002, 0001, 0000 |
| char counter | ${counter([A-Z]{2})} or ${counter(\C{2})} | AA, AB, AC, ..., ZX, ZY, ZZ |
| char counter decrement order | ${counter([ZYXWVUTSRQPONMLKJIHGFEDCBA]{2})} | ZZ, ZY, ZX, ..., AC, AB, AA |
| hex counter | ${counter([0-9a-f]{5})} or ${counter(\h{5})} | 00000, 00001, 00002, ..., ffffd, ffffe, fffff |
| hex counter decrement order | ${counter([FEDCBA9876543210]{5})} | FFFFF, FFFFE, FFFFD, ..., 00002, 00001, 00000 |
| custom IDs | (ID(${counter([1-9]{3})})) | ID111, ID112, ID113, ..., ID997, ID998, ID999 |
| loading TXT file content from the default folder | $"FirstNamesMale.txt" | John or Alan or Glen |
| loading TXT file content from a user folder | $"D:\folder_name\FirstNamesMale.txt" | John or Alan or Glen |
| loading CSV file content from the default folder [csv_second_column] | $"USStates.csv[1]" | Ohio or Iowa or Texas |
| loading CSV file content from a user folder [csv_first_column] | $"D:\folder_name\USStates.csv[0]" | OH or IA or TX |
| loading column content from the same table | $"[Gender]" | F or M |
| loading column content from other table | $"[HumanResources].[Employee].[Gender]" | F or M |
| loading column content from other database | $"[AdventureWorks2014].[HumanResources].[Employee].[Gender]" | F or M |
| loading column content from other connection | $"[connection_name].[AdventureWorks2014].[HumanResources].[Employee].[Gender]" | F or M |
| loading column content from query | $"[SELECT * FROM [HumanResources].[Employee] WHERE [OrganizationLevel] = 1].[Gender]" | F or M |
| loading column content from query of other connection | $"[connection_name].[SELECT * FROM [HumanResources].[Employee] WHERE [OrganizationLevel] = 1].[Gender]" | F or M |
| generating values according to their weight ratio | Ohio$"10"``|``Iowa$"50"``|``Texas$"90" | Texas or Texas or Texas or Iowa or Texas |
| generating values from predefined generator | $"IPv4 Address" | 10.0.0.4 or 192.168.1.2 |

### Escapes:

| Description | Usage | Generates (examples) |
| --- | --- | --- |
| backslash  | \\ | \ |
| dollar sign  | \\``$`` | $ |
| ordinary chars  | \\{ | { |
| right brace  | \\} | } |
| left square bracket  | \\[ | [ |
| right square bracket  | \\] | [ |
| left parenthesis  | \\( | ( |
| right parenthesis  | \\) | ) | 
| asterisk  | \\* | * | 
| plus mark  | \\+ | + | 
| question mark  | \\? | ? | 
| lower-case letter  | \\c | [a-z] |
| upper-case letter  | \\C | [A-Z] | 
| upper or lower-case letter  | \\A | [a-zA-Z] | 
| upper or lower-case letter or underscore or digit  | \\w | [a-zA-Z_0-9] | 
| all ASCII printable characters  | \\W | [ -~] | 
| digit  | \\d | [0-9] | 
| digit without a zero  | \\D | [1-9] | 
| bit  | \\b | [0-1] | 
| hexadecimal character  | \\h | [0-9a-f] | 
| HEXADECIMAL character  | \\H | [0-9A-F] | 
| carriage return  | \\r |  | 
| line feed  | \\l |  | 
| tab character  | \\t |  | 
| space characters  | \\s | [ \t] | 
| unicode (UTF-16) escapes  | \\u20ac | € | 
| hexadecimal escapes  | \\xA3 | ₤ | 

Additionally, you can use the Insert Snippet button to add the following snippets:

| Snippets | Description |
| --- | --- |
| [a-z]  | lower case letter |
| [A-Z] | UPPER case letter |
| [0-9] | digit |
| \D | digit without a zero |
| \h | hexadecimal character |
| [ ] | space |
| \w | UPPER or lower-case letter or underscore or digit |
| \W | all ASCII printable characters |
| ``|`` | alternative |
| ( ) | group |
| * | 0 or more repeats |
| + | 1 or more repeats |
| {5} | 5 repeats |
| {5,9} | 5 to 9 repeats |
| {5,} | 5 or more repeats |