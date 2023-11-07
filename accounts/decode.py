
import base64
morse_code_dict = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....',
    '7': '--...', '8': '---..', '9': '----.',
    ' ': '/'
}

alphabet_list = [chr(97 + i) for i in range(26)]




def morse_encode(text):
    result = ''
    for char in text:
        result = result + ' ' + morse_code_dict[char.upper()]
    return result

def morse_decode(morsed_text):
    result = ''
    morsed_text = morsed_text.split()
    for morse_char in morsed_text:
        for key, value in morse_code_dict.items():
            if value == morse_char:
                result += key
                break
    return result







def swap_case(text):
    return text.swapcase()





def snake_case(text):
    result = ''
    for char in text:
        if char.isupper():
            result += '_' + char.lower()
        else:
            result += char
    return result





def camel_case(text):
    pass_index = ''
    length = len(text)
    result = ''
    for char in range(length):
        if char == pass_index:
            continue
        elif text[char] == '_':
            result += text[char + 1].upper()
            pass_index = char + 1
        else:
            result += text[char]
    return result





def caesar_cipher_decode(text, key):
    if key >= 26:
        key = key - 26
    result = ''
    for char in text:
        if char.isupper():
            decoded_char = chr((ord(char) - key - 65) % 26 + 65)
            result += decoded_char
        elif char.islower():
            decoded_char = chr((ord(char) - key - 97) % 26 + 97)
            result += decoded_char
        else:
            result += char
    return result



def caesar_cipher_encode(text, key):
    result = ''
    for char in text:
        if char.isupper():
            encrypted_char = chr((ord(char) + key - 65) % 26 + 65)
            result += encrypted_char
        elif char.islower():
            encrypted_char = chr((ord(char) + key - 97) % 26 + 97)
            result += encrypted_char
        else:
            result += char
    return result


def vigenere_cipher_decode(text, key):
    key = key.upper()
    key_repeated = ''.join(key[i % len(key)] for i in range(len(text)))
    encrypted_text = ''

    for i in range(len(text)):
        if text[i].isupper():
            encrypted_char = chr((ord(text[i]) + ord(key_repeated[i])) % 26 + 65)
            encrypted_text += encrypted_char
        elif text[i].islower():
            encrypted_char = chr((ord(text[i]) + ord(key_repeated[i].lower()) - 2 * 97) % 26 + 97)
            encrypted_text += encrypted_char
        else:
            encrypted_text += text[i]

    return encrypted_text

def vigenere_cipher_encode(text, key):
    key = key.upper()
    key_repeated = ''.join(key[i % len(key)] for i in range(len(text)))
    encoded_text = ''

    for i in range(len(text)):
        if text[i].isupper():
            encoded_char = chr((ord(text[i]) + ord(key_repeated[i])) % 26 + 65)
            encoded_text += encoded_char
        elif text[i].islower():
            encoded_char = chr((ord(text[i]) + ord(key_repeated[i].lower()) - 2 * 97) % 26 + 97)
            encoded_text += encoded_char
        else:
            encoded_text += text[i]

    return encoded_text




def base64_decode(encoded_string):
    encoded_bytes = encoded_string.encode('utf-8')
    decoded_bytes = base64.b64decode(encoded_bytes)
    decoded_string = decoded_bytes.decode('utf-8')
    return decoded_string


def base64_encode(input_string):
    encoded_bytes = base64.b64encode(input_string.encode('utf-8'))
    encoded_string = encoded_bytes.decode('utf-8')
    return encoded_string
