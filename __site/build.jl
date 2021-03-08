
using JSON
using DataStructures
using PyCall
using Franklin
bs4 = pyimport("bs4")

function soup(htmlfile)
    contents = read(htmlfile,String)
    bs4.BeautifulSoup(contents,"lxml")
end

function findtitle(htmlfile)
    sp = soup(htmlfile)
    for i=1:6
        h = sp.find("h$i")
        if h ≠ nothing
            return h.text
        end
    end
    "no title"
end

function plaintext(htmlfile)
    sp = soup(htmlfile)
    content = sp.find("div",class="franklin-content")
    if content ≠ nothing
        join(split(content.text)," ")
    else
        ""
    end
end

function url(htmlfile)
    htmlfile
end

function clean(s::AbstractString)
    result = replace(s,"\""=>"")
    if endswith(result, "index.html")
        result[1:end-10]
    else
        result
    end
end

function pages(dir; prefix = "/")
    allpages = Any[]
    for (root,dirs,files) in walkdir(dir)
        for file in files
            if endswith(file,".html") && file ≠ "search.html"
                filepath = replace(joinpath(root,file),r"^\./"=>"")
                push!(allpages,
                      OrderedDict("title"=>clean(findtitle(filepath)),
                                  "text"=>clean(plaintext(filepath)),
                                  "tags"=>"", 
                                  "url"=>prefix * clean(url(filepath))))
            end
        end
    end
    return allpages
end

function makesearchcache()
    cd("/Users/sswatson/Dropbox/Sites/brown/__site")
    dicts = pages(".")
    f = open("/Users/sswatson/Dropbox/Sites/brown/_assets/tipuesearch_content.js","w")
    write(f,"""var tipuesearch = {"pages": [""")
    write(f,join(JSON.json.(dicts),",\n"))
    write(f,"]};")
    close(f)
    cd("../")
end

serve(single = true)
makesearchcache()
serve(single = true) # this moves the tipuesearch_content.js file into place in the __site folder
