<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template   xsl:template match="/"> 
        <html>
        <head></head>
        <body>
            <table border="1">
                <tr>
                    <th><p>Id</p></th>
                    <th><p>Name</p></th>
                    <th><p>Available Sizes</p></th>
                    <th><p>Price</p></th>
                </tr>
                <xsl:for-each select="products/product">  
                    <tr> 
                        <td> 
                            <xsl:value-of select="@rollno"/> 
                        </td> 
                        <td><xsl:value-of select="id"/></td> 
                        <td><xsl:value-of select="name"/></td> 
                        <td><xsl:value-of select="sizes"/></td> 
                        <td><xsl:value-of select="prices"/></td> 
                    </tr>    
                </xsl:for-each>   
            </table>
        </body>
        </html>
    </xsl:template>  
</xsl:stylesheet>
