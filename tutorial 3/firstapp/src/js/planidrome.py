inp=''
arr=[]
counter=1
dictionary={}
print('Enter String')
while (inp!='Done'):
	inp=input()
	inpr=inp.replace(' ','')
	rev=inpr[::-1]
	if(rev.lower()==inpr.lower()):
		dictionary[counter]=inp
		counter+=1
print("The palindromes are: "+str(dictionary))