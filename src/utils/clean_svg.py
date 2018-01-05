#!/usr/bin/env python
import sys
import re

def clean_opening_tag(line):
    line = re.sub(r'data-name=\".+?\"', "className=\"manhattan-svg-container\"", line)
    line = re.sub(r'xmlns=\".+?\"', "ref={node => this.node = node}", line)

    # and add ref, claaName

    # could update the id but eh
    return line

# Make "SOMETHING_LIKE_THIS" to "Something Like This"
def clean_tag_id(str):
    str = str.replace("_"," ")
    # use "title to get" "Title To Get"
    return str.title()

# things that need to be cleaned, <polygon, <path, <rect, <g
# right now all this does is format the id to a title string but could be extended in the future.
def clean_tag(tag):
    # tag = tag.replace("class", "className")
    # if it doesn't have an id, no updates necessary, return
    if "id=" not in tag:
        return tag
    # ok so let's grab the matches
    matches=re.findall(r'\"(.+?)\"',tag)
    tag_id = matches[0]
    formatted_tag_id = clean_tag_id(tag_id)

    # test injection
    injection = "\n onClick={this.onClickHandle(\"" + tag_id + "\")} \n onMouseEnter={this.onClickHandle(\"" + tag_id + "\")} \n"

    # className={selection == \"" + formatted_tag_id + "\" ? \"selected\" : \"\"}"

    clean_line = re.sub(r'id=\"(.+?)\"', "id=\"" + tag_id + "\"" + injection, tag)

    # clean_line = re.sub(r'class=\"(.+?)\"',"className={""}")

    return clean_line

def main():
    # Init output files
    output_file = open(sys.argv[2],"w+")
    css_output_file = open(sys.argv[3], "w+")

    with open(sys.argv[1],"r") as input:
        #create the opening tag
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

        # save some time, wrap entire thing in g for d3 access.
        output_file.write("<g id=\"the_map\">\n")

        # and now process remaining svg body, letting the clean_tag function do the work.
        for line in input.readlines():
            if "</svg>" not in line:
                output_file.write(clean_tag(line))
            else:
                output_file.write("</g>\n</svg>")

        # close input, we done
        input.close()

if __name__ == "__main__":
    main()
