# def main():
#     try:
#         configuration = open('config.txt')
#     except FileNotFoundError:
#         print("Couldn't find the config.txt file!")


# if __name__ == '__main__':
#     main()

def main():
    try:
        configuration = open('config.txt')
    except FileNotFoundError:
        print("Couldn't find the config.txt file!")
    except PermissionError:
        print("Found config.txt but it is a directory, couldn't read it")
if __name__ == '__main__':
    main()