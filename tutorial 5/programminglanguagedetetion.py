import Algorithmia
input = """
def a():
	print('hello')
"""
client = Algorithmia.client('simLGjZIHj+n7jJdnChDyi1mxrA1')
algo = client.algo('PetiteProgrammer/ProgrammingLanguageIdentification/0.1.3')
algo.set_options(timeout=300) # optional
print(algo.pipe(input).result)