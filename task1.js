/*
	John is travelling from one city to another. 
	So far he has travelled A kilometers 
	and the total distance to his destination is B kilometers. 
	He can only travel C kilometers per day. 
	Function returns a minimal number of days it will take John 
	to get to the destination from his current position.
*/

function solution1(A, B, C) {

	return Math.ceil((B - A) / C);

}