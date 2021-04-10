lettori = """2 Fabrizio Costa 
3 Claudia Melli 
4 Benedetta Rognoni 
5 Chiara Gagliano 
6 Luca Cristiano 
7 Michela Podda 
8 Enza Rampello 
9 Teresa Rossi 
10 Daniele Tarini 
12 Silvia Galletti
13 Carla Congiu
14 Giulia Cavedoni 
1 Elena Zucconi 
2 Carmela Trimarchi  
3 Giulia Del Nista 
4 Michela Melai 
5 Martina Evangelista 
6 Andrea Spresian 
7 Antonella Biegi 
8 Andrea Colzi 
9 Mara Pacini 
10 Serena Detti 
11 Claudia Taffi 
12 Nadia Della Croce 
13 Loredana Paris
14 Alessandra Manfredini"""

class Lettore:
    def __init__(self, full):
        self.nome, self.cognome = [a.strip() for a in full.split(' ', 1)]

    def t(self):
        return (self.nome, self.cognome)

    def __str__(self):
        return "%s %s" % (self.nome, self.cognome)


readers = [Lettore(line.split(' ', 1)[1]) for line in lettori.split('\n')]
print([str(r) for r in sorted(readers, key = lambda r: r.cognome)])
