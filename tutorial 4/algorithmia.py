import Algorithmia
client = Algorithmia.client('simLGjZIHj+n7jJdnChDyi1mxrA1')
algo = client.algo('deeplearning/IllustrationTagger/0.4.0')

foo = client.dir("data://owais/data")
foo.file("test.jpg").putFile("./test1.jpg")

input = {
  "image": "data://owais/data/test.jpg"
}
algo.set_options(timeout=300) # optional
print(algo.pipe(input).result)