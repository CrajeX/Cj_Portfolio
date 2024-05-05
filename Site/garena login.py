import tkinter as tk
from tkinter import filedialog as fd, ttk
from PIL import Image, ImageTk

# Root window
root = tk.Tk()
root.title('Display a Text File')
root.geometry('862x404+{}+{}'.format(int((root.winfo_screenwidth() - 1000) / 2), int((root.winfo_screenheight() - 1000) / 2)))

bg_image = Image.open("garena.jpg")  # Replace "background_image.jpg" with your image file path
bg_photo = ImageTk.PhotoImage(bg_image)