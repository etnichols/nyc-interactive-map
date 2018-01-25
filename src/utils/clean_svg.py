#!/usr/bin/env python
import sys
import re

def clean_opening_tag(line):
    line = re.sub(r'data-name=\".+?\"', "className=\"manhattan-svg-container\"", line)
    line = re.sub(r'xmlns=\".+?\"', "ref={node => this.node = node}", line)
    return line

# Format the ID to remove all caps and underscores.
# "SOMETHING_LIKE_THIS" ==> "Something Like This"
def clean_tag_id(str):
    str = str.replace("_"," ")
    return str.title()

# things that need to be cleaned, <polygon, <path, <rect, <g
# right now all this does is format the id to a title string but could be extended in the future.
def clean_tag(tag):
    # tag = tag.replace("class", "className")
    # if it doesn't have an id, no updates necessary, return
    if "<g" not in tag:
        return tag

    # Use regex to grab all quoted strings in the
    matches=re.findall(r'\"(.+?)\"',tag)
    tag_id = matches[0]

    class_name = "" if "class=" not in tag else matches[1]

    # Injection is used to attach event listeners and conditional styling to an element.
    injection = "\n onClick={this.onClickHandle} \n onMouseEnter={this.onClickHandle} \n className={\"" + class_name + "\" + (selection === \"" + tag_id + "\" ? \" selected\" : \"\")}"

    clean_line = re.sub(r'id=\"(.+?)\"', "id=\"" + tag_id + "\"" + injection, tag)

    clean_line = re.sub(r'class=\"(.+?)\"',"", clean_line)

    return clean_line

def main():
    # Init output files.
    output_file = open(sys.argv[2],"w+")
    css_output_file = open(sys.argv[3], "w+")

    with open(sys.argv[1],"r") as input:
        # Create the opening tag
        opening_tag = input.readline()
        output_file.write(clean_opening_tag(opening_tag))

        # consume next two lines, the <defs> and <style> tags
        input.readline()
        input.readline()

        # while loop to copy styles to css output file
        while 1:
            line = input.readline()
            if "</style>" not in line:
                css_output_file.write(line)
            else:
                break

        # consume closing </defs> tag
        input.readline()

        # Wrap entire svg in g tag, for d3 access.
        output_file.write("<g id=\"the_map\">\n")

        # And now process remaining svg body, letting the clean_tag function do the work.
        for line in input.readlines():
            if "</svg>" not in line:
                output_file.write(clean_tag(line))
            else:
                output_file.write("</g>\n</svg>")

        input.close()

if __name__ == "__main__":
    main()
