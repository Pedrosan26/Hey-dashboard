import hermesBalance as balance
import hermesInversion as inversion

def main ():
    ingresos_egresos=balance.main()
    portafolio=inversion.main()

if __name__ == "__main__":
    main()