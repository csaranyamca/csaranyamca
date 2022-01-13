<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <!-- TODO: Auto-generated template -->
        <html>
            <head></head>
            <body>
                <h1 style="text-align:center">Employee Managment System</h1>
                <table border="2" align="center">
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>SALARY</th>
                        <th>EMAIL</th>
                        <th>MobNum</th>
                        <th>Designation</th>
                    </tr>
                    <xsl:for-each select="Company/Employee">
                        <tr>
                            <td>
                                <xsl:value-of select="emp-id" />
                            </td>
                            <td>
                                <xsl:value-of select="Emp-name" />
                            </td>
                            <td>
                                <xsl:value-of select="Emp-age" />
                            </td>
                            <td>
                                <xsl:value-of select="Emp-salary" />
                            </td>
                            <td>
                                <xsl:value-of select="Emp-emailid" />
                            </td>
                            <td>
                                <xsl:value-of select="Emp-Phonenum" />
                            </td>
                            <td>
                                <xsl:value-of select="Emp-designation" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>